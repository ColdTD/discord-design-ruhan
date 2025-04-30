
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BriefcaseBusiness, GraduationCap, BookOpen } from "lucide-react";

// Dados de experiência profissional
const experiences = [
  {
    role: "Estágio em TI",
    company: "Prefeitura de Peruíbe",
    period: "2021 - 2024",
    description: "Suporte de TI para todos setores públicos (remoto e presencial), redes, auxiliar adiministrativo, treinamento de funcionários públicos para sistemas, controle de estoque, manutenção de computadores, desenvolvimento UX/UI, prototipação, desenvolvimento web e desenvolvimento de software."
  }
];

// Dados de formação
const education = [
  {
    degree: "Bacharelado em Tecnologia da Informação",
    institution: "Univesp",
    period: "2022 - atual",
    description: "Formação tecnológica para o desenvolvimento, implementação, gestão e uso de sistemas de informação e tecnologia."
  },
  {
    degree: "Análise e Desenvolvimento de Sistemas",
    institution: "Fatec Santos",
    period: "2019 - 2022",
    description: "Formação tecnológica para projetar, desenvolver, implementar e manter sistemas de software e computacionais."
  }
];

// Dados de cursos e certificações
const courses = [
  {
    title: "Design Systems Masterclass",
    institution: "UX Academy",
    year: "2022",
    description: "Curso intensivo sobre criação e implementação de design systems escaláveis para grandes organizações."
  },
  {
    title: "Certificação em Acessibilidade Digital",
    institution: "A11Y Institute",
    year: "2021",
    description: "Aprofundamento em práticas de design inclusivo e WCAG 2.1 para criar produtos digitais acessíveis para todos os usuários."
  },
  {
    title: "Prototyping Avançado com Figma",
    institution: "Design Tools Pro",
    year: "2020",
    description: "Técnicas avançadas de prototipagem, animação e criação de componentes interativos no Figma."
  },
  {
    title: "User Research Methods",
    institution: "Nielsen Norman Group",
    year: "2019",
    description: "Metodologias qualitativas e quantitativas para pesquisa de usuário e análise de dados comportamentais."
  }
];

const ExperiencesSection: React.FC = () => {
  return (
    <section id="experiences" className="py-20 container">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Experiências & Formação</h2>
        <p className="text-muted-foreground max-w-2xl">
          Minha trajetória profissional e acadêmica que construiu minha visão sobre design e experiência do usuário.
        </p>
      </div>

      <Tabs defaultValue="experience" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="experience" className="flex items-center gap-2">
            <BriefcaseBusiness className="h-4 w-4" />
            <span className="hidden sm:inline">Experiência</span>
          </TabsTrigger>
          <TabsTrigger value="education" className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4" />
            <span className="hidden sm:inline">Formação</span>
          </TabsTrigger>
          <TabsTrigger value="courses" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            <span className="hidden sm:inline">Cursos</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="experience" className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="discord-card">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{exp.role}</CardTitle>
                    <CardDescription>{exp.company}</CardDescription>
                  </div>
                  <span className="text-sm text-discord-blurple font-medium">{exp.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="education" className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="discord-card">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{edu.degree}</CardTitle>
                    <CardDescription>{edu.institution}</CardDescription>
                  </div>
                  <span className="text-sm text-discord-blurple font-medium">{edu.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="courses" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course, index) => (
            <Card key={index} className="discord-card">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription>{course.institution}</CardDescription>
                  </div>
                  <span className="text-sm text-discord-blurple font-medium">{course.year}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{course.description}</p>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default ExperiencesSection;
