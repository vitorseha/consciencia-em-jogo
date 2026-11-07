import {
  LuBriefcaseBusiness,
  LuAward,
  LuUsers,
  LuScale,
  LuMegaphone
} from "react-icons/lu";

export const categories = [
  // =====================================================
  // 1. PROCESSO SELETIVO
  // =====================================================
  {
    id: "processo_seletivo",
    name: "Processo seletivo",
    color: "#f47d3b",
    icon: LuBriefcaseBusiness,
    questions: [
      {
        id: "ps_01",
        question:
          "Uma empresa recebe dois currículos com experiências profissionais semelhantes. Durante a seleção, o recrutador demonstra preferência pelo candidato branco porque considera que sua aparência combina mais com a imagem da empresa. Essa atitude representa:",
        options: [
          "Uma decisão baseada na qualificação profissional.",
          "Uma preferência pessoal sem consequências.",
          "Uma possível prática de discriminação racial.",
          "Uma estratégia comum de recrutamento."
        ],
        correctAnswer: 2,
        explanation:
          "A aparência associada a características raciais não deve ser utilizada como critério de avaliação profissional. Essa preferência pode reproduzir estereótipos e discriminação racial."
      },
      {
        id: "ps_02",
        question:
          "Uma candidata negra comparece a uma entrevista de emprego usando seu cabelo natural. O entrevistador sugere que ela deveria mudar o cabelo para transmitir uma imagem mais profissional. Qual é o problema dessa situação?",
        options: [
          "A empresa está apenas estabelecendo um padrão de vestimenta.",
          "O entrevistador está associando características naturais da aparência negra à falta de profissionalismo.",
          "A candidata deveria seguir todas as preferências pessoais do entrevistador.",
          "Não existe problema, pois o cabelo não interfere na contratação."
        ],
        correctAnswer: 1,
        explanation:
          "Associar cabelos crespos, cacheados ou tranças à falta de profissionalismo reproduz padrões estéticos discriminatórios e pode prejudicar candidatos negros."
      },
      {
        id: "ps_03",
        question:
          "Durante um processo seletivo, uma empresa percebe que quase todos os candidatos aprovados são brancos, mesmo recebendo currículos de profissionais negros igualmente qualificados. Qual atitude seria mais adequada?",
        options: [
          "Ignorar a situação, pois a escolha é responsabilidade exclusiva dos recrutadores.",
          "Reduzir os critérios de qualificação para candidatos negros.",
          "Avaliar os critérios de seleção e investigar possíveis vieses raciais.",
          "Considerar que os candidatos negros não possuem interesse nas vagas."
        ],
        correctAnswer: 2,
        explanation:
          "Analisar os critérios de contratação ajuda a identificar barreiras discriminatórias e tornar o processo seletivo mais justo e inclusivo."
      }
    ]
  },

  // =====================================================
  // 2. PROMOÇÃO E RECONHECIMENTO
  // =====================================================
  {
    id: "promocao",
    name: "Promoção e reconhecimento",
    color: "#E9B83F",
    icon: LuAward,
    questions: [
      {
        id: "pr_01",
        question:
          "Uma funcionária negra apresenta bons resultados e possui mais tempo de experiência que seus colegas. Entretanto, funcionários brancos com menos experiência recebem promoções. Qual situação merece atenção?",
        options: [
          "A diferença de idade entre os funcionários.",
          "A possibilidade de desigualdade racial nos critérios de promoção.",
          "A preferência dos funcionários por cargos diferentes.",
          "A necessidade de aumentar o tempo de experiência da funcionária."
        ],
        correctAnswer: 1,
        explanation:
          "Quando profissionais com qualificações semelhantes recebem tratamentos diferentes, é importante investigar se existem critérios discriminatórios ou barreiras raciais nas promoções."
      },
      {
        id: "pr_02",
        question:
          "Um funcionário negro desenvolve um projeto importante, mas, durante a apresentação dos resultados, seu superior recebe todo o reconhecimento pelo trabalho. Esse comportamento pode representar:",
        options: [
          "Uma prática de gestão eficiente.",
          "Uma situação sem relação com o ambiente profissional.",
          "Falta de reconhecimento profissional, que pode estar associada à desigualdade racial.",
          "Uma consequência natural da hierarquia empresarial."
        ],
        correctAnswer: 2,
        explanation:
          "O apagamento das contribuições de profissionais negros pode reforçar desigualdades, prejudicar sua visibilidade e limitar seu desenvolvimento profissional."
      },
      {
        id: "pr_03",
        question:
          "Qual medida pode ajudar uma empresa a combater desigualdades raciais nas promoções?",
        options: [
          "Permitir que gestores promovam funcionários apenas por afinidade.",
          "Estabelecer critérios transparentes e acompanhar os resultados das promoções.",
          "Evitar discutir questões raciais no ambiente de trabalho.",
          "Priorizar funcionários que já ocupam cargos de liderança."
        ],
        correctAnswer: 1,
        explanation:
          "Critérios transparentes e acompanhamento dos dados ajudam a identificar desigualdades e tornar as oportunidades de crescimento mais justas."
      }
    ]
  },

  // =====================================================
  // 3. COMENTÁRIOS E CONVIVÊNCIA
  // =====================================================
  {
    id: "comentarios",
    name: "Comentários e convivência",
    color: "#B93643",
    icon: LuUsers,
    questions: [
      {
        id: "co_01",
        question:
          "Durante o expediente, um funcionário faz uma piada racista sobre um colega e, ao ser questionado, afirma que era apenas uma brincadeira. Qual afirmação está correta?",
        options: [
          "Piadas não podem ser consideradas discriminatórias.",
          "A intenção de brincar elimina o impacto da fala.",
          "Comentários racistas continuam sendo inadequados, mesmo quando apresentados como brincadeira.",
          "O colega deveria simplesmente ignorar a situação."
        ],
        correctAnswer: 2,
        explanation:
          "Apresentar uma fala racista como brincadeira não elimina seu caráter discriminatório nem o impacto causado. Comentários desse tipo contribuem para um ambiente de trabalho hostil."
      },
      {
        id: "co_02",
        question:
          "Uma funcionária negra é frequentemente questionada sobre a origem de seu cabelo e ouve comentários de colegas que o consideram 'exótico'. Essa situação pode ser considerada:",
        options: [
          "Um elogio necessariamente inofensivo.",
          "Uma manifestação de estereótipos raciais e constrangimento.",
          "Uma forma obrigatória de integração entre colegas.",
          "Uma atitude sem relação com preconceito."
        ],
        correctAnswer: 1,
        explanation:
          "Comentários que tratam características associadas à identidade negra como algo estranho ou exótico podem reforçar estereótipos, gerar constrangimento e reproduzir discriminação."
      },
      {
        id: "co_03",
        question:
          "Um funcionário presencia um colega fazendo comentários racistas, mas permanece em silêncio para evitar conflitos. Qual seria uma atitude mais adequada?",
        options: [
          "Fingir que não ouviu.",
          "Apoiar o comentário para evitar constrangimentos.",
          "Demonstrar que a fala é inadequada e buscar formas seguras de apoiar a pessoa atingida.",
          "Esperar que a pessoa atingida resolva tudo sozinha."
        ],
        correctAnswer: 2,
        explanation:
          "O enfrentamento ao racismo também envolve a responsabilidade de quem presencia a discriminação. É importante agir de maneira segura, apoiar a pessoa atingida e utilizar os canais adequados."
      }
    ]
  },

  // =====================================================
  // 4. DISTRIBUIÇÃO DE OPORTUNIDADES
  // =====================================================
  {
    id: "oportunidades",
    name: "Distribuição de oportunidades",
    color: "#16856F",
    icon: LuScale,
    questions: [
      {
        id: "op_01",
        question:
          "Um gestor sempre escolhe funcionários brancos para participar de reuniões importantes com clientes, enquanto funcionários negros ficam responsáveis por tarefas internas menos valorizadas. Qual pode ser a consequência dessa prática?",
        options: [
          "Maior igualdade entre os funcionários.",
          "Redução das oportunidades de crescimento profissional dos funcionários negros.",
          "Melhoria automática da produtividade.",
          "Especialização profissional de todos os trabalhadores."
        ],
        correctAnswer: 1,
        explanation:
          "A distribuição desigual de atividades pode limitar a visibilidade, a experiência e as oportunidades de promoção de determinados profissionais, contribuindo para a desigualdade racial."
      },
      {
        id: "op_02",
        question:
          "Uma empresa oferece treinamentos de liderança apenas aos funcionários indicados informalmente pelos gestores. Nenhum funcionário negro é indicado, apesar de possuir qualificações. Qual problema pode existir?",
        options: [
          "Falta de interesse dos funcionários negros.",
          "Possíveis barreiras raciais no acesso ao desenvolvimento profissional.",
          "Excesso de oportunidades na empresa.",
          "Ausência de necessidade de treinamento."
        ],
        correctAnswer: 1,
        explanation:
          "O acesso desigual a treinamentos e capacitações pode contribuir para a manutenção das desigualdades raciais dentro das organizações."
      },
      {
        id: "op_03",
        question:
          "Qual prática contribui para uma distribuição mais justa das oportunidades de trabalho?",
        options: [
          "Distribuir tarefas de acordo com preferências pessoais dos gestores.",
          "Reservar atividades importantes apenas aos funcionários mais próximos da liderança.",
          "Estabelecer critérios transparentes e oferecer oportunidades de desenvolvimento a todos.",
          "Evitar que funcionários mudem de função."
        ],
        correctAnswer: 2,
        explanation:
          "Critérios claros e oportunidades acessíveis ajudam a evitar favorecimentos e permitem que todos os funcionários tenham condições mais justas de desenvolvimento profissional."
      }
    ]
  },

  // =====================================================
  // 5. DENÚNCIA E ENFRENTAMENTO
  // =====================================================
  {
    id: "denuncia",
    name: "Denúncia e enfrentamento",
    color: "#65436F",
    icon: LuMegaphone,
    questions: [
      {
        id: "de_01",
        question:
          "Um trabalhador presencia uma situação de racismo, mas tem medo de denunciar porque acredita que poderá sofrer consequências no emprego. Qual é um dos principais obstáculos nessa situação?",
        options: [
          "Falta de interesse em combater a discriminação.",
          "Medo de retaliação e insegurança em relação aos mecanismos de denúncia.",
          "Excesso de canais de comunicação.",
          "Falta de conhecimento sobre as funções profissionais."
        ],
        correctAnswer: 1,
        explanation:
          "O medo de perder oportunidades, sofrer perseguições ou enfrentar consequências profissionais pode impedir que trabalhadores denunciem situações discriminatórias."
      },
      {
        id: "de_02",
        question:
          "Qual deve ser a postura de uma empresa ao receber uma denúncia de racismo?",
        options: [
          "Ignorar a denúncia caso não existam testemunhas.",
          "Expor publicamente a pessoa que realizou a denúncia.",
          "Investigar a situação com seriedade, preservar a confidencialidade e evitar retaliações.",
          "Transferir automaticamente a pessoa que denunciou."
        ],
        correctAnswer: 2,
        explanation:
          "A empresa deve oferecer mecanismos seguros de denúncia, apurar os fatos com imparcialidade e proteger as pessoas envolvidas contra retaliações."
      },
      {
        id: "de_03",
        question:
          "Qual das alternativas representa uma ação efetiva de combate ao racismo nas organizações?",
        options: [
          "Realizar campanhas pontuais sem mudanças nas práticas internas.",
          "Promover treinamentos, estabelecer políticas antidiscriminatórias e acompanhar sua aplicação.",
          "Deixar o combate ao racismo exclusivamente por conta dos funcionários negros.",
          "Evitar abordar o assunto para não gerar conflitos."
        ],
        correctAnswer: 1,
        explanation:
          "O combate ao racismo exige ações contínuas, educação, políticas institucionais e responsabilidade de toda a organização, especialmente de suas lideranças."
      }
    ]
  }
];
