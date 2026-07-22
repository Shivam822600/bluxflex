import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ContactUs() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/contact-us-2', { replace: true });
  }, [navigate]);

  return null;
}