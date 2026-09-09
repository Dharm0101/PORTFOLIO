import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import { X, Terminal as TermIcon, Minimize2, Maximize2 } from 'lucide-react';

export const TerminalWidget = ({ isOpen, onClose, onCycleTheme }) => {
  const { terminal } = portfolioData;
  const [history, setHistory] = useState([
    ...terminal.welcome.map(text => ({ type: 'welcome', text }))
  ]);
  const [inputVal, setInputVal] = useState('');
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandHistory, setCommandHistory] = useState([]);
  const terminalBottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    terminalBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const trimmed = inputVal.trim().toLowerCase();
      if (!trimmed) return;

      const newHistory = [...history, { type: 'input', text: `dharm@portfolio:~$ ${inputVal}` }];
      setCommandHistory((prev) => [...prev, inputVal]);
      setHistoryIndex(-1);

      if (trimmed === 'clear') {
        setHistory([]);
        setInputVal('');
        return;
      }

      if (trimmed === 'theme') {
        onCycleTheme();
        newHistory.push({ type: 'output', text: '⚡ Switched active visual theme.' });
      } else if (terminal.commands[trimmed]) {
        newHistory.push({ type: 'output', text: terminal.commands[trimmed] });
      } else {
        newHistory.push({
          type: 'error',
          text: `bash: command not found: ${trimmed}. Type 'help' to see list of valid commands.`
        });
      }

      setHistory(newHistory);
      setInputVal('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const newIdx = historyIndex + 1 < commandHistory.length ? historyIndex + 1 : historyIndex;
      setHistoryIndex(newIdx);
      setInputVal(commandHistory[commandHistory.length - 1 - newIdx] || '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIdx = historyIndex - 1;
        setHistoryIndex(newIdx);
        setInputVal(commandHistory[commandHistory.length - 1 - newIdx] || '');
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="terminal-backdrop"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 110,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        background: 'rgba(5, 8, 14, 0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
      onClick={onClose}
    >
      <div
        className="glass-panel terminal-window"
        style={{
          width: '100%',
          maxWidth: '820px',
          height: '520px',
          borderRadius: '16px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid rgba(0, 255, 136, 0.3)',
          background: 'rgba(10, 14, 22, 0.95)',
          boxShadow: '0 25px 60px rgba(0,0,0,0.8), 0 0 40px rgba(0, 255, 136, 0.15)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header Bar */}
        <div
          style={{
            padding: '12px 18px',
            background: 'rgba(15, 20, 32, 0.9)',
            borderBottom: '1px solid var(--border-glass)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981' }} />
            <span
              style={{
                marginLeft: '12px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
              }}
            >
              dharm@portfolio:~ (bash)
            </span>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Terminal Content Screen */}
        <div
          className="terminal-content"
          style={{
            flex: 1,
            padding: '20px',
            overflowY: 'auto',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.88rem',
            color: '#00ff88',
            lineHeight: 1.6,
          }}
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((item, idx) => (
            <div
              key={idx}
              style={{
                marginBottom: '8px',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
                color:
                  item.type === 'input'
                    ? '#f8fafc'
                    : item.type === 'error'
                    ? '#f43f5e'
                    : item.type === 'welcome'
                    ? 'var(--accent-cyan)'
                    : '#00ff88',
              }}
            >
              {item.text}
            </div>
          ))}

          {/* Active Input Line */}
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '6px' }}>
            <span style={{ color: 'var(--accent-cyan)', marginRight: '8px', userSelect: 'none' }}>
              <span className="terminal-prompt-full">dharm@portfolio:~$</span>
              <span className="terminal-prompt-short">~$</span>
            </span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleCommand}
              style={{
                flex: 1,
                background: 'transparent',
                border: 'none',
                outline: 'none',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.88rem',
                color: '#f8fafc',
                caretColor: '#00ff88',
              }}
              placeholder="type 'help' or 'projects'..."
              autoFocus
            />
          </div>
          <div ref={terminalBottomRef} />
        </div>

        {/* Footer help bar */}
        <div
          className="terminal-footer"
          style={{
            padding: '8px 18px',
            background: 'rgba(8, 12, 18, 0.9)',
            borderTop: '1px solid var(--border-glass)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.74rem',
            fontFamily: 'var(--font-mono)',
            color: 'var(--text-muted)',
          }}
        >
          <span>Available: help | skills | projects | contact | hire | theme | clear</span>
          <span>Press ESC to exit</span>
        </div>
      </div>

      <style>{`
        .terminal-prompt-short {
          display: none;
        }
        @media (max-width: 640px) {
          .terminal-backdrop {
            padding: 8px !important;
          }
          .terminal-window {
            height: 84vh !important;
            max-height: 84vh !important;
            border-radius: 12px !important;
          }
          .terminal-content {
            padding: 14px 12px !important;
            font-size: 0.82rem !important;
          }
          .terminal-footer {
            padding: 8px 12px !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 4px !important;
            font-size: 0.7rem !important;
          }
        }
        @media (max-width: 480px) {
          .terminal-prompt-full {
            display: none !important;
          }
          .terminal-prompt-short {
            display: inline !important;
          }
        }
      `}</style>
    </div>
  );
};
