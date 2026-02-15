"use client";

import { useState } from "react";
import { Mail, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simular envío de email
    setEmailSent(true);
    setTimeout(() => {
      alert(`Se ha enviado un correo de recuperación a: ${email}`);
    }, 500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ background: '#F6F3EE' }}>
      <div style={{ 
        width: '400px',
        backgroundColor: '#fff',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        borderRadius: '10px',
        padding: '20px 30px'
      }}>
        {/* Botón Volver */}
        <button
          onClick={() => router.push('/login')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            background: 'none',
            border: 'none',
            color: '#70A99F',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500',
            marginBottom: '20px',
            padding: 0
          }}
        >
          <ArrowLeft size={18} />
          Volver al login
        </button>

        {/* Logo PetCare */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: '8px', 
          marginBottom: '20px' 
        }}>
          <div style={{ 
            width: '40px', 
            height: '40px', 
            background: '#70A99F', 
            borderRadius: '50%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' 
          }}>
            <span style={{ fontSize: '20px' }}>🐾</span>
          </div>
          <h1 style={{ 
            fontSize: '28px', 
            fontWeight: 'bold', 
            margin: 0,
            color: '#333'
          }}>
            PetCare
          </h1>
        </div>

        {!emailSent ? (
          <>
            {/* Título */}
            <h2 style={{
              textAlign: 'center',
              margin: '0 0 10px 0',
              fontSize: '24px',
              fontWeight: '800'
            }}>
              ¿Olvidaste tu contraseña?
            </h2>

            <p style={{
              textAlign: 'center',
              fontSize: '13px',
              color: '#666',
              marginBottom: '30px'
            }}>
              No te preocupes, te enviaremos instrucciones para recuperarla.
            </p>

            {/* Formulario */}
            <form onSubmit={handleSubmit} style={{ 
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              {/* Email */}
              <div style={{ position: 'relative' }}>
                <Mail 
                  size={18} 
                  style={{
                    position: 'absolute',
                    left: '15px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#a0a0a0',
                    pointerEvents: 'none'
                  }}
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Correo electrónico"
                  autoComplete="off"
                  style={{
                    borderRadius: '20px',
                    border: '1px solid #c0c0c0',
                    outline: 'none',
                    padding: '12px 15px 12px 45px',
                    boxSizing: 'border-box',
                    width: '100%'
                  }}
                  required
                />
              </div>

              <button
                type="submit"
                style={{
                  padding: '12px 15px',
                  borderRadius: '20px',
                  border: 'none',
                  outline: 'none',
                  background: '#70A99F',
                  color: 'white',
                  cursor: 'pointer',
                  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                  fontWeight: '500',
                  fontSize: '14px'
                }}
              >
                Enviar instrucciones
              </button>
            </form>
          </>
        ) : (
          <>
            {/* Mensaje de éxito */}
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: '#E8F5F1',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px'
              }}>
                <span style={{ fontSize: '40px' }}>📧</span>
              </div>

              <h2 style={{
                fontSize: '22px',
                fontWeight: '700',
                marginBottom: '10px'
              }}>
                ¡Correo enviado!
              </h2>

              <p style={{
                fontSize: '13px',
                color: '#666',
                marginBottom: '25px',
                lineHeight: '1.5'
              }}>
                Hemos enviado las instrucciones de recuperación a:<br />
                <strong style={{ color: '#70A99F' }}>{email}</strong>
              </p>

              <button
                onClick={() => router.push('/login')}
                style={{
                  padding: '12px 30px',
                  borderRadius: '20px',
                  border: 'none',
                  outline: 'none',
                  background: '#70A99F',
                  color: 'white',
                  cursor: 'pointer',
                  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                  fontWeight: '500',
                  fontSize: '14px'
                }}
              >
                Volver al login
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}