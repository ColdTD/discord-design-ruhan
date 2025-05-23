import React, { useState, useRef } from 'react';
import { Mail, Linkedin, AlertCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  
  // EmailJS configuration com as credenciais fornecidas
  const [emailJSConfig, setEmailJSConfig] = useState({
    serviceId: 'service_j91oagf',
    templateId: 'template_w4e94eg',
    publicKey: 'jcvdHxz4NutQY8xT4'
  });
  
  const [showConfig, setShowConfig] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };
  
  const handleConfigChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setEmailJSConfig(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Atenção",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive"
      });
      return;
    }
    
    // Enviando o email com EmailJS
    setIsSubmitting(true);
    
    // Os parâmetros enviados para o template
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message
    };

    emailjs.send(
      emailJSConfig.serviceId, 
      emailJSConfig.templateId, 
      templateParams, 
      emailJSConfig.publicKey
    )
      .then((response) => {
        console.log('Email enviado!', response.status, response.text);
        toast({
          title: "Sucesso!",
          description: "Sua mensagem foi enviada. Entraremos em contato em breve!",
        });
        
        // Limpar o formulário após envio
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      })
      .catch((err) => {
        console.error('Erro ao enviar email:', err);
        toast({
          title: "Erro",
          description: "Houve um problema ao enviar sua mensagem. Por favor, tente novamente.",
          variant: "destructive"
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-20 container">
      <div className="discord-card p-8 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Vamos Conversar</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Estou sempre interessado em novos projetos e oportunidades de colaboração.
            Sinta-se à vontade para entrar em contato!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="discord-card p-6 flex items-center">
            <div className="bg-discord-darkgray p-3 rounded-full mr-4">
              <Mail className="text-discord-blurple" size={24} />
            </div>
            <div>
              <h3 className="font-medium mb-1">Email</h3>
              <a href="mailto:RuhanDavidson@gmail.com" className="discord-link">
                RuhanDavidson@gmail.com
              </a>
            </div>
          </div>
          
          <div className="discord-card p-6 flex items-center">
            <div className="bg-discord-darkgray p-3 rounded-full mr-4">
              <Linkedin className="text-discord-blurple" size={24} />
            </div>
            <div>
              <h3 className="font-medium mb-1">LinkedIn</h3>
              <a href="#" className="discord-link">
                linkedin.com/in/ruhandavidson
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-discord-dark rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-discord-blurple/50 focus:border-discord-blurple transition-all"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-discord-dark rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-discord-blurple/50 focus:border-discord-blurple transition-all"
                  placeholder="seu.email@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium">Mensagem</label>
              <textarea 
                id="message" 
                rows={5} 
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-discord-dark rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-discord-blurple/50 focus:border-discord-blurple transition-all"
                placeholder="Me conte sobre seu projeto..."
              ></textarea>
            </div>
            
            <div className="text-center">
              <Button 
                type="submit" 
                className="discord-button px-8 py-3"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
