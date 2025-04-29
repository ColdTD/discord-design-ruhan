
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BriefcaseBusiness, GraduationCap, BookOpen } from "lucide-react";

// Dados de experiência profissional
const experiences = [
  {
    role: "UX Designer Senior",
    company: "TechSolutions Inc.",
    period: "2021 - Presente",
    description: "Lidero projetos de redesign de produtos digitais com foco em melhorar métricas de engajamento e retenção. Coordeno pesquisas com usuários e workshops de ideação com stakeholders."
  },
  {
    role: "Product Designer",
    company: "InnovateUX",
    period: "2018 - 2021",
    description: "Responsável pelo design de interfaces para aplicações móveis e web, conduzindo pesquisas de usuário e criando protótipos interativos. Implementei uma metodologia de design system que reduziu o tempo de desenvolvimento em 30%."
  },
  {
    role: "UI/UX Designer Jr.",
    company: "Digital Creative Agency",
    period: "2016 - 2018",
    description: "Colaborei com equipes de desenvolvimento e marketing na criação de interfaces para websites e aplicativos. Contribuí para a criação de guias de estilo e componentes reutilizáveis."
  }
];

// Dados de formação
const education = [
  {
    degree: "Pós-graduação em UX Design",
    institution: "Digital Innovation Institute",
    period: "2019 - 2020",
    description: "Especialização em métodos avançados de pesquisa de usuário, design thinking e prototipagem de alta fidelidade."
  },
  {
    degree: "Bacharelado em Design Digital",
    institution: "Universidade Federal de Design",
    period: "2012 - 2016",
    description: "Formação em design de interfaces, experiência do usuário, e princípios fundamentais de design com foco em tecnologias digitais."
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
