import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Beneficio {
  title: string;
  description: string;
  icon?: string;
}

export interface Props {
  title?: string;
  subtitle?: string;
  beneficios?: Beneficio[];
  backgroundImage?: ImageWidget;
}

export default function BeneficiosSection({
  title = "POR QUE ESCOLHER A ANHANGUERA?",
  subtitle = "Mais de 1 milhão de alunos confiam na nossa educação",
  beneficios = [
    {
      title: "Diploma Reconhecido pelo MEC",
      description: "Seu diploma tem o mesmo valor de um curso presencial",
      icon: "🎓"
    },
    {
      title: "Flexibilidade Total",
      description: "Estude quando e onde quiser, no seu ritmo",
      icon: "⏰"
    },
    {
      title: "Suporte Acadêmico",
      description: "Professores e tutores sempre disponíveis para ajudar",
      icon: "👨‍🏫"
    },
    {
      title: "Tecnologia de Ponta",
      description: "Plataforma moderna e intuitiva para seus estudos",
      icon: "💻"
    },
    {
      title: "Preços Acessíveis",
      description: "Mensalidades que cabem no seu bolso",
      icon: "💰"
    },
    {
      title: "Empregabilidade",
      description: "Cursos alinhados com as demandas do mercado",
      icon: "📈"
    }
  ]
}: Props) {
  return (
    <section class="py-16 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">{title}</h2>
          <p class="text-xl text-gray-600">{subtitle}</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beneficios.map((beneficio, index) => (
            <div key={index} class="text-center p-6">
              <div class="text-6xl mb-4">{beneficio.icon}</div>
              <h3 class="text-xl font-bold text-gray-800 mb-3">{beneficio.title}</h3>
              <p class="text-gray-600">{beneficio.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div class="mt-16 bg-purple-600 rounded-lg p-8">
          <div class="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div class="text-4xl font-bold mb-2">1M+</div>
              <div class="text-lg">Alunos Formados</div>
            </div>
            <div>
              <div class="text-4xl font-bold mb-2">50+</div>
              <div class="text-lg">Cursos Disponíveis</div>
            </div>
            <div>
              <div class="text-4xl font-bold mb-2">25</div>
              <div class="text-lg">Anos de Experiência</div>
            </div>
            <div>
              <div class="text-4xl font-bold mb-2">95%</div>
              <div class="text-lg">Satisfação dos Alunos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}