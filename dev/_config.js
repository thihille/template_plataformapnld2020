let colecao = "connections"; //apoema, aprendendo, connections, praticando e tempo
let disciplina = "ingles"; //arte, ciencias, geografia, historia, matematica, portugues e ingles
let ano_colecao = 7;
let caracterizado = true;

let platform = {
    inicio: [ //Preenchimento de dados
        {
            rotulo: 'Apresentação',
            arquivo: '01_CNI7_MPD_B1_PD_001_004',
        }
    ],
    primeiro_bimestre: [ //Preenchimento de dados
        {
            rotulo: 'Plano de desenvolvimento do 1º bimestre',
            arquivo: '01_CNI7_MPD_B1_PD_001_004',
        },
        {
            rotulo: 'Sequência didática 1 - Diferenciando misturas homogêneas e heterogêneas',
            arquivo: '02_CNI7_MPD_B1_SD_01_005_015',
        },
        {
            rotulo: 'Sequência didática 2 - Transformações químicas',
            arquivo: '03_CNI7_MPD_B1_SD_02_016_021',
        },
        {
            rotulo: 'Sequência didática 3 - Separação de materiais',
            arquivo: '04_CNI7_MPD_B1_SD_03_022_027',
        },
        {
            rotulo: 'Proposta de acompanhamento de aprendizagem',
            arquivo: '05_CNI7_MPD_B1_PA_028_037',
        },
        {
            rotulo: 'Projeto integrador: 1º Bimestre',
            arquivo: '06_CNI7_MPD_B1_PI_038_042',
        },
        {
            rotulo: 'Asking the price and making a recipe',
            arquivo: '1_asking_the_price_and_making_a_recipe',
            video: true
        }

    ],
    segundo_bimestre: [ //Preenchimento de dados
        {
            rotulo: 'Plano de desenvolvimento do 2º bimestre',
            arquivo: '07_CNI7_MPD_B2_PD_043_046',
        },
        {
            rotulo: 'Sequência didática 1: Células: unidades da vida',
            arquivo: '08_CNI7_MPD_B2_SD_04_047_058',
        },
        {
            rotulo: 'Sequência didática 2: Das células aos complexos sistemas',
            arquivo: '09_CNI7_MPD_B2_SD_05_059_067',
        },
        {
            rotulo: 'Sequência didática 3: A visão e as lentes corretivas',
            arquivo: '10_CNI7_MPD_B2_SD_06_068_076',
        },
        {
            rotulo: 'Proposta de acompanhamento de aprendizagem',
            arquivo: '11_CNI7_MPD_B2_PA_077_083',
        },
        {
            rotulo: 'Projeto integrador: 2º Bimestre',
            arquivo: '12_CNI7_MPD_B2_PI_084_089',
        },
        {
            rotulo: 'Asking for directions',
            arquivo: '2_asking_for_directions',
            video: true
        }
    ],
    terceiro_bimestre: [ //Preenchimento de dados
        {
            rotulo: 'Plano de desenvolvimento do 3º bimestre',
            arquivo: '13_CNI7_MPD_B3_PD_090_093',
        },
        {
            rotulo: 'Sequência didática 1: Sistema nervoso',
            arquivo: '14_CNI7_MPD_B3_SD_07_094_100',
        },
        {
            rotulo: 'Sequência didática 2: Movimento',
            arquivo: '15_CNI7_MPD_B3_SD_08_101_106',
        },
        {
            rotulo: 'Sequência didática 3: Sistema nervoso e as substâncias psicoativas',
            arquivo: '16_CNI7_MPD_B3_SD_09_107_115',
        },
        {
            rotulo: 'Proposta de acompanhamento de aprendizagem',
            arquivo: '17_CNI7_MPD_B3_PA_116_123',
        },
        {
            rotulo: 'Projeto integrador: 3º Bimestre',
            arquivo: '18_CNI7_MPD_B3_PI_124_130',
        },
        {
            rotulo: 'Past memories',
            arquivo: '3_past_memories',
            video: true
        }
    ],
    quarto_bimestre: [ //Preenchimento de dados
        {
            rotulo: 'Plano de desenvolvimento do 4º bimestre',
            arquivo: '19_CNI7_MPD_B4_PD_131_134',
        },
        {
            rotulo: 'Sequência didática 1: As camadas da Terra',
            arquivo: '20_CNI7_MPD_B4_SD_10_135_145',
        },
        {
            rotulo: 'Sequência didática 2: Rochas e fósseis',
            arquivo: '21_CNI7_MPD_B4_SD_11_146_154',
        },
        {
            rotulo: 'Sequência didática 3: Esfericidade da Terra',
            arquivo: '22_CNI7_MPD_B4_SD_12_155_164',
        },
        {
            rotulo: 'Proposta de acompanhamento de aprendizagem',
            arquivo: '23_CNI7_MPD_B4_PA_164_173',
        },
        {
            rotulo: 'Projeto integrador: 4º Bimestre',
            arquivo: '24_CNI7_MPD_B4_PI_174_179',
        },
        {
            rotulo: 'Describing people and combatingbullying',
            arquivo: '4_describing_people_and_combating_bullying',
            video: true
        }
    ]
};