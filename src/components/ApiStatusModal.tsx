import React, { useState, useEffect } from 'react';
import { X, Database, CheckCircle, RefreshCw, Key, ShieldCheck, AlertCircle, ExternalLink } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl bg-[#161b22] border border-[#30363d] rounded-2xl shadow-2xl p-6 sm:p-8 text-left">
        
        {/* Botón Cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-[#8b949e] hover:text-white rounded-lg hover:bg-[#21262d] transition"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Encabezado */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Database className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-black text-white flex items-center gap-2">
              Conexión a la API y Fuentes de Datos
            </h3>
            <span className="text-xs text-[#8b949e]">
              Gestor de datos oficiales de Historia de Bover
            </span>
          </div>
        </div>

        {/* Estado Actual de la API */}
        <div className="p-4 rounded-xl bg-[#0d1117] border border-[#21262d] space-y-3 mb-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#8b949e]">Estado del Servidor:</span>
            <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 bg-emerald-950/50 px-2.5 py-1 rounded-full border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              API REST Activa (v{status?.version || '1.0.0'})
            </span>
          </div>

          <div className="flex items-center justify-between text-xs">
            <span className="text-[#8b949e]">Partidos oficiales validados:</span>
            <span className="font-numbers text-white font-bold">{status?.officialHistoryTotal || 266} partidos</span>
          </div>

          <div className="flex items-center justify-between text-xs">
            <span className="text-[#8b949e]">Última sincronización:</span>
            <span className="font-numbers text-white">
              {status ? new Date(status.lastSync).toLocaleString('es-AR') : 'Al día'}
            </span>
          </div>

          <div className="pt-2 border-t border-[#21262d]">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-[#8b949e] mb-1.5">
              Fuentes Oficiales Conectadas:
            </span>
            <ul className="space-y-1 text-xs text-[#e6edf3]">
              <li className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Asociación del Fútbol Argentino (AFA) - Registros 1913 a 2026</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Rec.Sport.Soccer Statistics Foundation (RSSSF)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Conector API-Football (Live Sync Boca #451 vs River #435)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Formulario de Conexión de API Externa */}
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-xs font-bold text-white mb-1.5 flex items-center gap-1.5">
              <Key className="w-3.5 h-3.5 text-[#fdbb30]" />
              Clave de API Externa (API-Football / RapidAPI - Opcional):
            </label>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Ej: x-rapidapi-key (deja vacío para verificar base oficial)"
              className="w-full bg-[#0d1117] border border-[#30363d] rounded-xl px-3.5 py-2 text-xs text-white placeholder-[#8b949e] focus:outline-none focus:border-white/40 font-mono"
            />
            <p className="text-[11px] text-[#8b949e] mt-1">
              Permite sincronizar partidos recientes y futuros en vivo automáticamente desde API-Sports.
            </p>
          </div>

          {message && (
            <div className={`p-3 rounded-xl border text-xs flex items-center gap-2 ${
              message.type === 'success'
                ? 'bg-emerald-950/40 border-emerald-500/30 text-emerald-300'
                : 'bg-red-950/40 border-red-500/30 text-red-300'
            }`}>
              {message.type === 'success' ? <CheckCircle className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
              <span>{message.text}</span>
            </div>
          )}

          <button
            onClick={handleSync}
            disabled={syncing}
            className="w-full py-2.5 bg-[#21262d] hover:bg-[#30363d] text-white font-bold text-xs rounded-xl border border-[#30363d] transition flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${syncing ? 'animate-spin' : ''}`} />
            <span>{syncing ? 'Sincronizando datos...' : 'Verificar y Sincronizar Ahora'}</span>
          </button>
        </div>

        {/* Footer info */}
        <div className="text-[11px] text-[#8b949e] pt-3 border-t border-[#21262d] flex items-center justify-between">
          <span>Modo Híbrido: Base Validada + Live Connector</span>
          <a
            href="https://www.api-football.com/"
            target="_blank"
            rel="noreferrer"
            className="text-white/60 hover:text-white flex items-center gap-1 transition"
          >
            Doc API-Football <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </div>
    </div>
  );
};
