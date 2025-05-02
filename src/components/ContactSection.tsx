
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
  
  // EmailJS configuration
  const [emailJSConfig, setEmailJSConfig] = useState({
    serviceId: '',
    templateId: '',
    publicKey: ''
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
    
    // Validar configuração EmailJS
    if (!emailJSConfig.serviceId || !emailJSConfig.templateId || !emailJSConfig.publicKey) {
      setShowConfig(true);
      toast({
        title: "Configuração necessária",
        description: "Por favor, configure suas credenciais do EmailJS primeiro.",
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
          {showConfig && (
            <Alert variant="destructive" className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                <div className="mt-2">
                  <p className="mb-2">Para enviar emails, você precisa configurar o EmailJS:</p>
                  <ol className="list-decimal pl-4 space-y-2">
                    <li>Crie uma conta em <a href="https://www.emailjs.com/" target="_blank" rel="noopener noreferrer" className="underline">emailjs.com</a></li>
                    <li>Configure um serviço de email (Gmail, Outlook, etc)</li>
                    <li>Crie um template de email</li>
                    <li>Copie os IDs e insira nos campos abaixo:</li>
                  </ol>
                  
                  <div className="grid gap-4 mt-4">
                    <div>
                      <label className="block mb-1 text-sm font-medium">Service ID</label>
                      <input 
                        type="text"
                        id="serviceId"
                        value={emailJSConfig.serviceId}
                        onChange={handleConfigChange}
                        className="w-full px-3 py-2 bg-discord-dark rounded-md border border-destructive focus:outline-none"
                        placeholder="Ex: service_abc123"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 text-sm font-medium">Template ID</label>
                      <input 
                        type="text"
                        id="templateId"
                        value={emailJSConfig.templateId}
                        onChange={handleConfigChange}
                        className="w-full px-3 py-2 bg-discord-dark rounded-md border border-destructive focus:outline-none"
                        placeholder="Ex: template_xyz789"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 text-sm font-medium">Public Key</label>
                      <input 
                        type="text"
                        id="publicKey"
                        value={emailJSConfig.publicKey}
                        onChange={handleConfigChange}
                        className="w-full px-3 py-2 bg-discord-dark rounded-md border border-destructive focus:outline-none"
                        placeholder="Ex: user_abc123xyz789"
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-end mt-4">
                    <Button 
                      variant="outline" 
                      onClick={() => setShowConfig(false)}
                      className="mr-2"
                    >
                      Cancelar
                    </Button>
                    <Button 
                      variant="default" 
                      onClick={() => {
                        if (emailJSConfig.serviceId && emailJSConfig.templateId && emailJSConfig.publicKey) {
                          setShowConfig(false);
                          toast({
                            title: "Configuração salva",
                            description: "Suas credenciais do EmailJS foram configuradas.",
                          });
                        } else {
                          toast({
                            title: "Atenção",
                            description: "Por favor, preencha todos os campos de configuração.",
                            variant: "destructive"
                          });
                        }
                      }}
                    >
                      Salvar
                    </Button>
                  </div>
                </div>
              </AlertDescription>
            </Alert>
          )}
          
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
              {!showConfig && (
                <button 
                  type="button" 
                  className="text-sm text-muted-foreground hover:text-foreground underline ml-4"
                  onClick={() => setShowConfig(true)}
                >
                  Configurar EmailJS
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

