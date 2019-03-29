let colecao = "apoema"; //apoema, aprendendo, connections, praticando e tempo
let disciplina = "ciencias"; //arte, ciencias, geografia, historia, matematica, portugues e ingles
let ano_colecao = 6;
let caracterizado = true;

let platform = {
    inicio: [ //Preenchimento de dados
        {
            rotulo: 'Apresentação',
            arquivo: '00-AMC6_MPD_B1_PD_001-006'
        }
    ],
    primeiro_bimestre: [ //Preenchimento de dados
        {
            rotulo: 'Plano de desenvolvimento do 1º bimestre',
            arquivo: '01-AMC6_MPD_B1_PD_002-014'
        },
        {
            rotulo: 'Sequência didática 1 - Diferenciando misturas homogêneas e heterogêneas',
            arquivo: '02-AMC6_MPD_B1_SD1_015-025'
        },
        {
            rotulo: 'Sequência didática 2 - Transformações químicas',
            arquivo: '03-AMC6_MPD_B1_SD2_026-033'
        },
        {
            rotulo: 'Sequência didática 3 - Separação de materiais',
            arquivo: '04-AMC6_MPD_B1_SD3_034-044'
        },
        {
            rotulo: 'Proposta de acompanhamento de aprendizagem',
            arquivo: '05-AMC6_MPD_B1_PA_045-057'
        },
        {
            rotulo: 'Projeto integrador: 1º Bimestre',
            arquivo: '06-AMC6_MPD_B1_PI_058-072'
        },
        {
            rotulo: 'Misturas homogêneas e misturas heterogêneas',
            arquivo: '01_misturas_homogeneas_e_misturas_heterogeneas',
            video: true
        },
        {
            rotulo: 'A água mineral: mistura homogênea',
            arquivo: '02_a_agua_mineral_mistura_homogenea',
            video: true
        },
        {
            rotulo: 'Transformações químicas',
            arquivo: '03_transformacoes_quimicas',
            video: true
        },

    ],
    segundo_bimestre: [ //Preenchimento de dados
        {
            rotulo: 'Plano de desenvolvimento do 2º bimestre',
            arquivo: '07-AMC6_MPD_B2_PD_073-080'
        },
        {
            rotulo: 'Sequência didática 1: Células: unidades da vida',
            arquivo: '08-AMC6_MPD_B2_SD1_081-090'
        },
        {
            rotulo: 'Sequência didática 2: Das células aos complexos sistemas',
            arquivo: '09-AMC6_MPD_B2_SD2_091-098'
        },
        {
            rotulo: 'Sequência didática 3: A visão e as lentes corretivas',
            arquivo: '10-AMC6_MPD_B2_SD3_099-107'
        },
        {
            rotulo: 'Proposta de acompanhamento de aprendizagem',
            arquivo: '11-AMC6_MPD_B2_PA_108-123'
        },
        {
            rotulo: 'Projeto integrador: 2º Bimestre',
            arquivo: '12-AMC6_MPD_B2_PI_124-141'
        },
        {
            rotulo: 'A célula',
            arquivo: '04_a_celula',
            video: true
        },
        {
            rotulo: 'Sol e sombras',
            arquivo: '05_sol_e_sombras',
            video: true
        }
    ],
    terceiro_bimestre: [ //Preenchimento de dados
        {
            rotulo: 'Plano de desenvolvimento do 3º bimestre',
            arquivo: '13-AMC6_MPD_B3_PD_142-149'
        },
        {
            rotulo: 'Sequência didática 1: Sistema nervoso',
            arquivo: '14-AMC6_MPD_B3_SD1_150-158'
        },
        {
            rotulo: 'Sequência didática 2: Movimento',
            arquivo: '15-AMC6_MPD_B3_SD2_159-166'
        },
        {
            rotulo: 'Sequência didática 3: Sistema nervoso e as substâncias psicoativas',
            arquivo: '16-AMC6_MPD_B3_SD3_167-177'
        },
        {
            rotulo: 'Proposta de acompanhamento de aprendizagem',
            arquivo: '17-AMC6_MPD_B3_PA_178-192'
        },
        {
            rotulo: 'Projeto integrador: 3º Bimestre',
            arquivo: '18-AMC6_MPD_B3_PI_193-213'
        },
        {
            rotulo: 'Olho e visão',
            arquivo: '06_olho_e_visao',
            video: true
        }
    ],
    quarto_bimestre: [ //Preenchimento de dados
        {
            rotulo: 'Plano de desenvolvimento do 4º bimestre',
            arquivo: '19-AMC6_MPD_B4_PD_214-220'
        },
        {
            rotulo: 'Sequência didática 1: As camadas da Terra',
            arquivo: '20-AMC6_MPD_B4_SD1_221-230'
        },
        {
            rotulo: 'Sequência didática 2: Rochas e fósseis',
            arquivo: '21-AMC6_MPD_B4_SD2_231-238'
        },
        {
            rotulo: 'Sequência didática 3: Esfericidade da Terra',
            arquivo: '22-AMC6_MPD_B4_SD3_239-245'
        },
        {
            rotulo: 'Proposta de acompanhamento de aprendizagem',
            arquivo: '23-AMC6_MPD_B4_PA_246-259'
        },
        {
            rotulo: 'Projeto integrador: 4º Bimestre',
            arquivo: '24-AMC6_MPD_B4_PI_260-275'
        },
        {
            rotulo: 'Petróleo e plástico',
            arquivo: '07_petroleo_e_plastico',
            video: true
        },
        {
            rotulo: 'Formação do petróleo',
            arquivo: '08_formacao_do_petroleo',
            video: true
        }
    ]
};