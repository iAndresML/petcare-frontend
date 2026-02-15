"use client";

import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, User, Phone } from "lucide-react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    alert(`Registro:\nNombre: ${formData.nombre} ${formData.apellido}\nEmail: ${formData.email}\nTeléfono: ${formData.telefono}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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

        {/* Título */}
        <h2 style={{
          textAlign: 'center',
          margin: '0 0 25px 0',
          fontSize: '24px',
          fontWeight: '800'
        }}>
          Crear cuenta
        </h2>

        {/* Formulario */}
        <form onSubmit={handleSubmit} style={{ 
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          marginBottom: '15px'
        }}>
          {/* Nombre */}
          <div style={{ position: 'relative' }}>
            <User 
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
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Nombre"
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

          {/* Apellido */}
          <div style={{ position: 'relative' }}>
            <User 
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
              type="text"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              placeholder="Apellido"
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
              name="email"
              value={formData.email}
              onChange={handleChange}
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

          {/* Teléfono */}
          <div style={{ position: 'relative' }}>
            <Phone 
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
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              placeholder="Teléfono"
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

          {/* Password */}
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
              name="password"
              value={formData.password}
              onChange={handleChange}
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

          {/* Confirmar Password */}
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
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirmar contraseña"
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
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
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
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

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
              fontWeight: '500',
              marginTop: '5px'
            }}
          >
            Registrarse
          </button>
        </form>

        {/* Ya tienes cuenta */}
        <p style={{ 
          margin: 0,
          fontSize: '10px',
          color: '#747474',
          textAlign: 'center'
        }}>
          ¿Ya tienes una cuenta?{' '}
          <span 
            onClick={() => router.push('/login')}
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
            Iniciar sesión
          </span>
        </p>
      </div>
    </div>
  );
}