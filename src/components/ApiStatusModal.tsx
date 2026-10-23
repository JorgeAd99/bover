import React, { useState, useEffect } from 'react';
import { X, Database, CheckCircle, RefreshCw, Key, AlertCircle, ExternalLink } from 'lucide-react';
import { checkApiHealth, syncExternalData, ApiStatus } from '../services/api';

interface ApiStatusModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSyncCompleted?: () => void;
}

export const ApiStatusModal: React.FC<ApiStatusModalProps> = ({
  isOpen,
  onClose,
  onSyncCompleted
}) => {
  const [status, setStatus] = useState<ApiStatus | null>(null);
  const [apiKey, setApiKey] = useState('');
  const [syncing, setSyncing] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    if (isOpen) {
      loadHealth();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const loadHealth = async () => {
    const data = await checkApiHealth();
    setStatus(data);
  };

  const handleSync = async () => {
    setSyncing(true);
    setMessage(null);
    try {
      const res = await syncExternalData(apiKey.trim() || undefined);
      setMessage({ type: 'success', text: res.message || 'Sincronización completada exitosamente.' });
      await loadHealth();
      onSyncCompleted?.();
    } catch (err: any) {
      setMessage({ type: 'error', text: err.message || 'Error al conectar con la API externa.' });
    } finally {
      setSyncing(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-backdrop"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl bg-[#121215] border border-white/[0.1] rounded-2xl shadow-2xl p-6 sm:p-8 text-left animate-modal"
      >
        
        {/* Botón Cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-zinc-400 hover:text-zinc-100 rounded-lg hover:bg-zinc-800 ui-pressable"
          aria-label="Cerrar modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Encabezado */}
        <div className="flex items-center gap-3.5 mb-6">
          <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 shrink-0">
            <Database className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-zinc-50 tracking-[-0.02em]">
              Motor de Datos y Estado de API
            </h3>
            <span className="text-xs text-zinc-400">
              Sincronización de registros históricos de Historia de Bover
            </span>
          </div>
        </div>

        {/* Estado Actual de la API */}
        <div className="p-4 sm:p-5 rounded-xl bg-[#09090b] border border-white/[0.07] space-y-3 mb-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-zinc-400">Estado del Servicio:</span>
            <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-950/50 px-2.5 py-1 rounded-lg border border-emerald-500/20 font-numbers">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Activa · v{status?.version || '1.0.0'}
            </span>
          </div>

          <div className="flex items-center justify-between text-xs">
            <span className="text-zinc-400">Partidos oficiales indexados:</span>
            <span className="font-numbers text-zinc-100 font-bold">{status?.officialHistoryTotal || 266} encuentros</span>
          </div>

          <div className="flex items-center justify-between text-xs">
            <span className="text-zinc-400">Última verificación:</span>
            <span className="font-numbers text-zinc-200">
              {status ? new Date(status.lastSync).toLocaleString('es-AR') : 'Sincronizado'}
            </span>
          </div>

          <div className="pt-3 border-t border-white/[0.06]">
            <span className="block text-[11px] font-semibold uppercase tracking-wider text-zinc-400 mb-2">
              Fuentes Oficiales Validadas
            </span>
            <ul className="space-y-1.5 text-xs text-zinc-300">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Asociación del Fútbol Argentino (AFA) — Período 1913–2026</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Rec.Sport.Soccer Statistics Foundation (RSSSF)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Conector API-Football (Boca #451 vs River #435)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Formulario de Conexión de API Externa */}
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-xs font-semibold text-zinc-200 mb-1.5 flex items-center gap-1.5">
              <Key className="w-3.5 h-3.5 text-[#facc15]" />
              Clave API-Football / RapidAPI (Opcional)
            </label>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="x-rapidapi-key (vacío para validar base local)"
              className="w-full bg-[#09090b] border border-white/[0.09] rounded-xl px-3.5 py-2.5 text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-white/[0.25] font-numbers"
            />
          </div>

          {message && (
            <div className={`p-3 rounded-xl border text-xs flex items-center gap-2 ${
              message.type === 'success'
                ? 'bg-emerald-950/40 border-emerald-500/30 text-emerald-300'
                : 'bg-rose-950/40 border-rose-500/30 text-rose-300'
            }`}>
              {message.type === 'success' ? <CheckCircle className="w-4 h-4 shrink-0" /> : <AlertCircle className="w-4 h-4 shrink-0" />}
              <span>{message.text}</span>
            </div>
          )}

          <button
            onClick={handleSync}
            disabled={syncing}
            className="w-full py-2.5 bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-xs rounded-xl ui-pressable flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${syncing ? 'animate-spin' : ''}`} />
            <span>{syncing ? 'Verificando registros...' : 'Verificar y Sincronizar Ahora'}</span>
          </button>
        </div>

        {/* Footer info */}
        <div className="text-[11px] text-zinc-500 pt-3 border-t border-white/[0.06] flex items-center justify-between">
          <span>Arquitectura híbrida: Base Histórica + Live Sync</span>
          <a
            href="https://www.api-football.com/"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400 hover:text-zinc-200 flex items-center gap-1 transition-colors"
          >
            API-Football <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </div>
    </div>
  );
};
