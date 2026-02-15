"use client";

import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ background: '#F6F3EE' }}>
      <div style={{ 
        width: '350px',
        backgroundColor: '#fff',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        borderRadius: '10px',
        padding: '20px 30px'
      }}>
        {/* Logo PetCare */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: '8px', 
          marginBottom: '30px' 
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

        {/* Título */}
        <h2 style={{
          textAlign: 'center',
          margin: '0 0 30px 0',
          fontSize: '28px',
          fontWeight: '800'
        }}>
          Bienvenido de nuevo
        </h2>

        {/* Formulario */}
        <form onSubmit={handleSubmit} style={{ 
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '18px',
          marginBottom: '15px'
        }}>
          {/* Email con icono */}
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
          
          {/* Password con iconos */}
          <div style={{ position: 'relative' }}>
            <Lock 
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
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
              autoComplete="off"
              style={{
                borderRadius: '20px',
                border: '1px solid #c0c0c0',
                outline: 'none',
                padding: '12px 45px 12px 45px',
                boxSizing: 'border-box',
                width: '100%'
              }}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: 'absolute',
                right: '15px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                color: '#a0a0a0'
              }}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <p style={{ 
            textAlign: 'right',
            margin: 0
          }}>
            <span 
              onClick={() => router.push('/forgot-password')}
              style={{
                fontSize: '9px',
                fontWeight: '700',
                color: '#747474',
                textDecoration: 'underline',
                cursor: 'pointer'
              }}
            >
              ¿Olvidaste tu contraseña?
            </span>
          </p>

          <button
            type="submit"
            style={{
              padding: '10px 15px',
              borderRadius: '20px',
              border: 'none',
              outline: 'none',
              background: '#70A99F',
              color: 'white',
              cursor: 'pointer',
              boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
              fontWeight: '500'
            }}
          >
            Iniciar sesión
          </button>
        </form>

        {/* Sign up */}
        <p style={{ 
          margin: 0,
          fontSize: '10px',
          color: '#747474'
        }}>
          ¿No tienes una cuenta?{' '}
          <span 
            onClick={() => router.push('/register')}
            style={{
              marginLeft: '1px',
              fontSize: '11px',
              textDecoration: 'underline',
              textDecorationColor: '#70A99F',
              color: '#70A99F',
              cursor: 'pointer',
              fontWeight: '800'
            }}
          >
            Regístrate
          </span>
        </p>

        {/* Botones sociales */}
        <div style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          marginTop: '20px'
        }}>
          {/* Google */}
          <button style={{
            borderRadius: '20px',
            padding: '10px 15px',
            boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '11px',
            gap: '5px',
            border: '2px solid #747474',
            background: 'white'
          }}>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" x="0px" y="0px" style={{ fontSize: '18px' }} viewBox="0 0 48 48" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24 c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
              <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657 C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
              <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
              <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
            </svg>
            <span>Iniciar sesión con Google</span>
          </button>
        </div>
      </div>
    </div>
  );
}