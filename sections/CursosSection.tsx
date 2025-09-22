import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Curso {
  name: string;
  duration: string;
  price: string;
  description: string;
  icon?: ImageWidget;
}

export interface Props {
  title?: string;
  subtitle?: string;
  cursos?: Curso[];
}

export default function CursosSection({
  title = "CURSOS TECNÓLOGOS DISPONÍVEIS",
  subtitle = "Escolha o curso ideal para sua carreira",
  cursos = [
    {
      name: "Análise e Desenvolvimento de Sistemas",
      duration: "2 anos",
      price: "R$ 199/mês",
      description: "Desenvolva sistemas e aplicações para o mercado de tecnologia"
    },
    {
      name: "Gestão de Recursos Humanos",
      duration: "2 anos", 
      price: "R$ 149/mês",
      description: "Gerencie pessoas e processos organizacionais"
    },
    {
      name: "Marketing",
      duration: "2 anos",
      price: "R$ 159/mês", 
      description: "Crie estratégias de marketing digital e tradicional"
    },
    {
      name: "Logística",
      duration: "2 anos",
      price: "R$ 139/mês",
      description: "Otimize processos de distribuição e supply chain"
    },
    {
      name: "Gestão Financeira",
      duration: "2 anos",
      price: "R$ 149/mês",
      description: "Gerencie recursos financeiros e investimentos"
    },
    {
      name: "Processos Gerenciais",
      duration: "2 anos",
      price: "R$ 129/mês",
      description: "Desenvolva competências em gestão empresarial"
    }
  ]
}: Props) {
  return (
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">{title}</h2>
          <p class="text-xl text-gray-600">{subtitle}</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cursos.map((curso, index) => (
            <div key={index} class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div class="mb-4">
                <h3 class="text-xl font-bold text-gray-800 mb-2">{curso.name}</h3>
                <div class="flex justify-between items-center mb-3">
                  <span class="text-purple-600 font-semibold">{curso.duration}</span>
                  <span class="text-2xl font-bold text-green-600">{curso.price}</span>
                </div>
                <p class="text-gray-600 mb-4">{curso.description}</p>
              </div>
              
              <div class="space-y-2 mb-6">
                <div class="flex items-center space-x-2">
                  <span class="text-green-500">✓</span>
                  <span class="text-sm text-gray-600">Diploma reconhecido pelo MEC</span>
                </div>
                <div class="flex items-center space-x-2">
                  <span class="text-green-500">✓</span>
                  <span class="text-sm text-gray-600">Aulas 100% online</span>
                </div>
                <div class="flex items-center space-x-2">
                  <span class="text-green-500">✓</span>
                  <span class="text-sm text-gray-600">Material didático incluso</span>
                </div>
              </div>

              <button class="w-full bg-purple-600 text-white py-3 rounded-lg font-bold hover:bg-purple-700 transition-colors">
                SAIBA MAIS
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}