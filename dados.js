let dados = [
    {
        titulo: "Catan", // Nome do Jogo
        descricao: "Um jogo de construção de cidades e comércio em um País insular, onde os jogadores competem para construir assentamentos, cidades e estradas, coletando recursos e negociando um com os outros.", // Breve descrição do Jogo e das regras
        habilidades: "Planejamento estratégico, Negociação, Gerenciamento de recursos, Adaptação", // Habilidades cognitivas e sociais que o jogo pode ajudar a desenvolver
        materias: "Geografia, Matemática, Economia", // Matérias do currículo escolar com as quais o jogo possui relação e que podem utilizar o jogo como reforço didático
        temas: "Comércio, Construção, Exploração", // Categoria geral do jogo (party game, estratégico, etc.)
        numeroDeJogadores: "3-4", // Numero mínimo e máximo de jogadores necessários para jogar
        faixaEtaria: "10+", // Idade mínima sugerida para jogar, indicada pelo fabricante
        tempoDejogo: "60-120 minutos", // Duração aproximada de uma partida
        linkLoja: "https://www.amazon.com.br/Devir-BGCATAN3-Catan-O-jogo/dp/B07SPGRB71/ref/asc_df_B07SPGRB71/?tag=googleshopp00-20&linkCode=df0&hvadid=309902263734&hvpos=&hvnetw=o&hvnetw=cada&hvadid=709902263734&hvpos=&hvnetw=hvnetw&hvnetw=hvq=&hvdev=c&hvcmd=v&hvlocint=&hvlocphy=9198709&hvtargid=pla-840243622724&psc=1&mcid=c6cca49be86b309&gad_source=b", // Link para onde comprar o jogo
        tags: "estrategico estrategia negociaçao adaptaçao matematica comercio construçao exploraçao"
    },
    {
        titulo: "Ticket to Ride",
        descricao: "Um jogo de construção de rotas ferroviárias, onde os jogadores competem para conectar cidades e completar rotas para pontuar.",
        habilidades: "Planejamento estratégico, Gerenciamento de recursos, Negociação",
        materias: "Geografia, Matemática",
        temas: "Transporte, Construção",
        numeroDeJogadores: "2-5",
        faixaEtaria: "8+",
        tempoDejogo: "30-60 minutos",
        linkLoja: "https://www.amazon.com/Ticket-Ride-Board-Game/dp/B0002L5R8G",
        tags: "estrategico negociaçao matematica construçao estrategia"
    },
    {
        titulo: "Dixit",
        descricao: "Um jogo de associação de imagens, onde os jogadores criam histórias a partir de cartas ilustradas.",
        habilidades: "Criatividade, Comunicação, Observação",
        materias: "Linguagem, Português, Artes",
        temas: "Imaginação, Storytelling",
        numeroDeJogadores: "3-6",
        faixaEtaria: "8+",
        tempoDejogo: "30 minutos",
        linkLoja: "https://www.amazon.com/Dixit-Juego-de-Mesa/dp/B002O1103X",
        tags: "comunicaçao observaçao portugues imaginaçao"
    },
    {
        titulo: "Root",
        descricao: "Um jogo assimétrico de controle de área, onde cada jogador controla uma facção única em um reino de animais.",
        habilidades: "Estratégia, Tática, Adaptação",
        materias: "História, Sociologia",
        temas: "Fantasia, Guerra",
        numeroDeJogadores: "2-4",
        faixaEtaria: "12+",
        tempoDejogo: "90-120 minutos",
        linkLoja: "https://www.amazon.com.br/Leder-Games-Root-Board-English/dp/B07F454YF3/ref=sr_1_3?dib=eyJ2IjoiMSJ9.3EOJW_gYtcZIYK12aSb81jo7DBJRmjeoR4sqlTHwLi5xTTO-tXspAyMghG9d7Rswn-l2GNfjpId0UJ8N334NYVVsLo626R5bNIZi_Yxw8ghgT8YxN5eafUlY-MRvMpMGsL8KU84tn0YrQYyWCBx8jX3Hfs3PGcXBCKJbIehYRHfCZJDltRetMbmOJcvRB9jkaYn56SxAdYZ5VKmEwf41SQEvoBf4mLQ3DE_jiVYyX2l46XQ3UPzf7ow92fy-LlVjk4wUffVfPne8SwC9jn-sazLDfwZJ01voNwLXnmBWxGY.wbQysoAgKw_RJSJXbPMAoNtr0WnXTsB8lWyKmF7F5Ig&dib_tag=se&keywords=root&qid=1725733040&sr=8-3&ufe=app_do%3Aamzn1.fos.25548f35-0de7-44b3-b28e-0f56f3f96147&th=1",
        tags: "estrategico estrategia tatica adaptaçao historia"
    },
    {
        titulo: "Carcassonne",
        descricao: "Um jogo de colocação de peças para construir um mapa medieval.",
        habilidades: "Planejamento estratégico, Visão espacial",
        materias: "História, Geografia",
        temas: "Medieval, Construção",
        numeroDeJogadores: "2-5",
        faixaEtaria: "8+",
        tempoDejogo: "30-45 minutos",
        linkLoja: "https://www.amazon.com/Carcassonne-Board-Game/dp/B0002L5R7Z",
        tags: "estrategico estrategia visao construçao historia"
    },
    {
        titulo: "Sagrada",
        descricao: "Um jogo de draft de dados, onde os jogadores constroem uma janela de vitral única.",
        habilidades: "Planejamento estratégico, Gerenciamento de recursos",
        materias: "Matemática, Artes",
        temas: "Abstração, Construção",
        numeroDeJogadores: "1-2",
        faixaEtaria: "10+",
        tempoDejogo: "30-45 minutos",
        linkLoja: "https://www.amazon.com.br/Gal%C3%A1pagos-Jogos-SAG001-Sagrada/dp/B07HMK2W74",
        tags: "estrategico estrategia matematica construçao abstraçao"
    },
    {
        titulo: "Azul",
        descricao: "Um jogo de draft de azulejos, onde os jogadores constroem belos padrões em seus pisos.",
        habilidades: "Planejamento estratégico, Gestão de recursos",
        materias: "Matemática, Artes",
        temas: "Abstração, Construção",
        numeroDeJogadores: "2-4",
        faixaEtaria: "8+",
        tempoDejogo: "30-45 minutos",
        linkLoja: "https://www.amazon.com.br/Gal%C3%A1pagos-Jogos-AZU001-Azul/dp/B07C7LRP6L/ref=sr_1_6?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3H4YWYIRCK0PU&dib=eyJ2IjoiMSJ9.lorXOHpgR4rcrjrayXNQq8rPnHagJ8FKjvANfqWDA2TblGtq2KZmmeStVVDdA76u7EZVxxKJawx1wc8znCTQHp5iCMFvwPGWusSjYagRUXwGcyCB58Adk_iotKWsuI5lw8ce5f2tQEOW3CsYU96gXJCwvsr8uVruiZQtehqAdvyKxo0gJsLvm-fcVKwU02AUtjWpiJ8jCkuZqhUQyPoe0-iAJHGAh4aVgf28f3w-gnPtAxzHXdompSz051NuCjMziOLnD2N_Jm7qOuvPCMvKtXOjLbLLenULzbQhuhWH2pg.g6r_WEbqpGFrmYdfIzUmKiMVywP_SCLeoJeajhtNvvQ&dib_tag=se&keywords=sagrada+jogo&qid=1725733114&sprefix=sagrada+jogo%2Caps%2C215&sr=8-6&ufe=app_do%3Aamzn1.fos.fcd6d665-32ba-4479-9f21-b774e276a678",
        tags: "estrategico estrategia gestao matematica construçao abstraçao"
    },
    {
        titulo: "Evolution",
        descricao: "Um jogo de cartas onde os jogadores evoluem suas espécies para sobreviver em um mundo em constante mudança.",
        habilidades: "Estratégia, Adaptação",
        materias: "Biologia, Ciências",
        temas: "Evolução, Natureza",
        numeroDeJogadores: "2-4",
        faixaEtaria: "12+",
        tempoDejogo: "45-60 minutos",
        linkLoja: "https://www.amazon.com.br/EVOLUTION-CARDS-REATAIL-BUNDLE-TABULEIRO/dp/B0725LRH1W",
        tags: "estrategico estrategia adaptaçao ciencias evoluçao"
    },
    {
        titulo: "Taco, Gato, Cabra, Queijo, Pizza",
        descricao: "Um jogo de cartas rápido e divertido, onde os jogadores tentam criar combinações de cartas para pontuar.",
        habilidades: "Observação, Raciocínio rápido",
        materias: "Linguagem, Português",
        temas: "Party Game",
        numeroDeJogadores: "3-8",
        faixaEtaria: "8+",
        tempoDejogo: "15 minutos",
        linkLoja: "https://www.amazon.com.br/Taco-Gato-Cabra-Queijo-Pizza/dp/B085N8W621/ref=sr_1_1?crid=2T7KRL6AZB4YV&dib=eyJ2IjoiMSJ9.MCAGaJopUQksVW6Tg9oaKHYh6HrfInUgVpTkXg4pMFDQbhNeBreSu4uXcQf91AbYT8BWl5nkY8zn1woara8mgKQM7SnLBnQdAwuwU0bUkL0hT30oAyqgoq8dZGiEs93H4WrVqlgAQ2ye37prOyxSNirRX7-dh1cjU0nRvyyWpvON3aZDN5oiyHg2xvXK6rBLEfgB7xp9l9qzE-9Ab8DxTteefC5rcLpklwWqwWaw4Zu-vZ5g7Nr3K87F0SYsUDimdskYy07ynrHzoAzy8kxHEQMoOkajRasg1yFxsWG24TQ.5aaY6CfSGluNKnTGol_gXn7nSFvOZqqzwSlWu0xK_Zs&dib_tag=se&keywords=taco+gato+cabra+queijo+pizza&qid=1725733310&s=toys&sprefix=tac%2Ctoys%2C204&sr=1-1",
        tags: "raciocinio rapido portugues observaçao"
    },
    {
        titulo: "Rory's Story Cubes",
        descricao: "Um jogo de contar histórias, onde os jogadores criam narrativas a partir de nove dados ilustrados.",
        habilidades: "Criatividade, Comunicação, Imaginação",
        materias: "Linguagem, Português",
        temas: "Storytelling",
        numeroDeJogadores: "3+",
        faixaEtaria: "8+",
        tempoDejogo: "15-30 minutos",
        linkLoja: "https://www.amazon.com.br/Cubes-Cosmos-Gal%C3%A1pagos-Jogos-RSC007/dp/B0877QGZ2V/ref=sr_1_6?crid=1KT5KRXZBEH0J&dib=eyJ2IjoiMSJ9.d5c6ZrSQnaQP-uIF_jep04rEQjdlc7bZWPk9dUEe3XjmJtPhYJASBwCWBwAddEfu65AGcMTN2sFgh-e0sJ4jXB83ztfHY1rGK5k1rxnqsOj7gF-nSbxyhPr3NpfiW1rtOLWZjjBfQSXWpR8unp_wNGJF0YL1tYhpp0CKZl5DDlTZ-CjNCFZAx9WUo4SZI3nOmRbUpT3704Hin8M8L8vMHj_c_Cx4wnE8tukeDY9XN6SAh2LIfefOcCpq2WTIUawIQWR8BSxBy0VxfQgsl4PJTKeR2dVTwxLoIZycaSIPoqs.FYsU2CQospwUZbR5Bj89uLoQiB4p4Q6OKofH5B8arbo&dib_tag=se&keywords=rory+story+cubes&qid=1725733336&s=toys&sprefix=rory%2Ctoys%2C199&sr=1-6",
        tags: "comunicaçao imaginaçao portugues"
    },
    {
        titulo: "Takenoko",
        descricao: "Um jogo de colocação de trabalhadores, onde os jogadores cultivam bambu para um panda exigente.",
        habilidades: "Planejamento estratégico, Gerenciamento de recursos",
        materias: "Geografia, Ciências",
        temas: "Natureza",
        numeroDeJogadores: "2-4",
        faixaEtaria: "10+",
        tempoDejogo: "45-60 minutos",
        linkLoja: "https://www.amazon.com.br/Gal%C3%A1pagos-Jogos-TAK001-Takenoko/dp/B0779KXCKQ/ref=sr_1_1?crid=30NPCD3USXIT0&dib=eyJ2IjoiMSJ9.OO7yYbfqnZ8vmLvGzbVj2nHT7yEedCWiEcNiFi0behiPMIrl7S5DTY60daXmjdMLqJDJhneboqdNd4uM2v9Zeyi3YSegEXKsroaPYweMcHhXrLEAhtt4q010nQIDZDvE0CO1246G18OAXfODcyj9vdTAOV29yuHEnxPk-QKjfXf8PbyMEmo60VK0D5OUMJSxjIwotizXYQj57j5tHY_apeLu00y3fc4gmNZ6bgG-zQQLbhjcq8PgGuS0t0Dt5FF6V7CF_X1yhpYsVNI8TQTCONJ00TpI0REeRmj1LENb0MU.WzvXCDD7CSyXuts2v5CRjnG0MZNK01Q2MYhLddWIAp4&dib_tag=se&keywords=takenoko+board+game&qid=1725733365&sprefix=takenoko%2Caps%2C199&sr=8-1&ufe=app_do%3Aamzn1.fos.4bb5663b-6f7d-4772-84fa-7c7f565ec65b",
        tags: "estrategico estrategia ciencias"
    },
    {
        titulo: "Ito",
        descricao: "Um party game cooperativo onde os jogadores recebem números secretos e precisam ordená-los com base em pistas relacionadas a um tema.",
        habilidades: "Comunicação, Dedução, Trabalho em equipe",
        materias: "Linguagem, Português, Matemática",
        temas: "Party game",
        numeroDeJogadores: "3+",
        faixaEtaria: "10+",
        tempoDejogo: "30-45 minutos",
        linkLoja: "https://www.amazon.com.br/Meeple-BR-1-ito/dp/B0D6CZK46Z",
        tags: "comunicaçao deduçao portugues matematica"
    },
    {
        titulo: "Wingspan",
        descricao: "Um jogo de construção de motores temático sobre aves, onde os jogadores constroem seus próprios santuários de pássaros.",
        habilidades: "Planejamento estratégico, Gerenciamento de recursos",
        materias: "Biologia, Ciências, Ornitologia, Ecologia",
        temas: "Natureza",
        numeroDeJogadores: "1-5",
        faixaEtaria: "14+",
        tempoDejogo: "45-60 minutos",
        linkLoja: "https://www.amazon.com/Stonemaier-Games-STM910-Wingspan-Multi-colored/dp/B07YQ641NQ/ref=sr_1_10?crid=PE7O6EVN51IA&dib=eyJ2IjoiMSJ9.co0MBmhIyIbab8n_L9CQOek631kItWwIsmCtSX7pFLKJLW9JR_TVcPcuFZ2uD2C4ptW_826Ucen3rQGEmcCCqR4GHminsgAOG9iRmFsPbayKJcNo5D3esYu8sYxq1ICH1VLZ2LPmo8fKLTfGtjqxq7DovK7vHtvLe5Y_OKWpRfDZO8dyhnaaobojrR0xT8KgcqRc4IbYXr0d_zo08s-wByTSht0sAuoEFixunlfb0EP34BxR2m5K-oa1xGVMNPjHQ_smLrgRE4VipevU6dL-bejkjePXU0wQXQfOGOQEM28.6e6eFx2e0junol1wK3z8F4CczmNvYRaRI-X64zNqhb8&dib_tag=se&keywords=ark+nova+board+game&qid=1725733577&sprefix=ark+nova+%2Caps%2C223&sr=8-10",
        tags: "estrategico estrategia ciencias"
    },
    {
        titulo: "Photosynthesis",
        descricao: "Um jogo de abstração espacial onde os jogadores cultivam árvores em um bosque, competindo pela luz do sol.",
        habilidades: "Planejamento estratégico, Visão espacial",
        materias: "Biologia, Ciências, Botânica, Ecologia",
        temas: "Natureza",
        numeroDeJogadores: "2-4",
        faixaEtaria: "10+",
        tempoDejogo: "30-45 minutos",
        linkLoja: "https://www.amazon.com/Blue-Orange-Games-Photosynthesis-Strategy/dp/B074K5W5N5?th=1",
        tags: "estrategico estrategia estratégia visao ciencias botanica"
    },
    {
        titulo: "Ark Nova",
        descricao: "Um jogo de construção de motores onde os jogadores constroem zoológicos temáticos, adquirindo animais e pesquisando novas tecnologias.",
        habilidades: "Planejamento estratégico, Gerenciamento de recursos",
        materias: "Biologia, Ciências, Zoologia, Ecologia",
        temas: "Natureza",
        numeroDeJogadores: "1-4",
        faixaEtaria: "14+",
        tempoDejogo: "120-150 minutos",
        linkLoja: "https://www.boardgamegeek.com/boardgame/266182/ark-nova",
        tags: "estrategico estrategia estratégia ciencias"
    },
    {
        titulo: "Oceans",
        descricao: "Um jogo de draft de cartas e colocação de trabalhadores onde os jogadores exploram os oceanos e protegem a vida marinha.",
        habilidades: "Planejamento estratégico, Gerenciamento de recursos",
        materias: "Biologia, Ciências, Oceanografia, Ecologia",
        temas: "Natureza",
        numeroDeJogadores: "2-4",
        faixaEtaria: "14+",
        tempoDejogo: "90-120 minutos",
        linkLoja: "https://www.boardgamegeek.com/boardgame/240735/oceans",
        tags: "estrategico estrategia estratégia ciencias"
    },
    {
        titulo: "Dominant Species",
        descricao: "Um jogo de simulação de evolução onde os jogadores criam espécies para dominar o planeta.",
        habilidades: "Planejamento estratégico, Adaptação",
        materias: "Biologia, Ciências, Evolução",
        temas: "Ciência",
        numeroDeJogadores: "2-4",
        faixaEtaria: "14+",
        tempoDejogo: "120-180 minutos",
        linkLoja: "https://www.boardgamegeek.com/boardgame/123330/dominant-species",
        tags: "estrategico estrategia estratégia adaptaçao ciencias evoluçao"
    }
  ];