const translations = {
  es: {
    // LANDING — gate
    'landing.gate_sub':'Área restringida.<br>Introduce la contraseña para acceder.',
    'landing.gate_placeholder':'Contraseña',
    'landing.gate_btn':'Acceder',
    'landing.gate_err':'Contraseña incorrecta.',
    // LANDING — nav
    'landing.nav_que_es':'Qué es',
    'landing.nav_proyectos':'Proyectos',
    // LANDING — qué es
    'landing.que_es_lbl':'Qué es AlmaWolf Lab',
    'landing.que_es_h':'El departamento de innovación del grupo AlmaWolf.',
    'landing.que_es_p1':'AlmaWolf Lab es el departamento de innovación del grupo AlmaWolf. Desde aquí exploramos nuevas formas de trabajar, automatizamos procesos y desarrollamos productos internos que combinan tecnología, inteligencia artificial y experiencia operacional.',
    'landing.que_es_p2':'Nuestro enfoque es práctico: cada iniciativa nace de una necesidad real, se valida con usuarios y evoluciona hasta convertirse en una solución medible, escalable y útil para el negocio.',
    // LANDING — proyectos
    'landing.proyectos_lbl':'Proyectos',
    'landing.proyectos_title':'Soluciones en marcha.',
    // LANDING — HER card
    'landing.her_desc':'Sistema de inteligencia operacional conversacional para el grupo AlmaWolf. Recoge información de la actividad de los equipos, la estructura y la convierte en conocimiento consultable mediante lenguaje natural.',
    'landing.her_impact_lbl':'Impacto generado',
    'landing.her_impact_1':'Mayor visibilidad semanal sobre avances y bloqueos del equipo.',
    'landing.her_impact_2':'Agentes que asisten y comparten conocimiento con cada empleado.',
    'landing.her_impact_3':'Centralización del conocimiento generado en la actividad diaria.',
    'landing.her_cta':'Ver proyecto HER →',
    // LANDING — Coexistencia card
    'landing.coex_desc':'Hub de integración que conecta los datos comerciales de Woztell con los sistemas de AlmaWolf: inteligencia operacional, CRM, calendarios y lo que venga después.',
    'landing.coex_impact_lbl':'Impacto generado',
    'landing.coex_impact_1':'Visibilidad de conversaciones y gestiones comerciales de WhatsApp.',
    'landing.coex_impact_2':'Automatización del match entre conversaciones y calendarios.',
    'landing.coex_impact_3':'Identificación automática de conversación por cliente.',
    'landing.coex_cta':'Ver proyecto Coexistencia →',
    // LANDING — DERCAS card
    'landing.dercas_desc':'Automatiza la cadena de consultoría desde las reuniones con cliente hasta la generación de documentación funcional y técnica lista para revisión humana.',
    'landing.dercas_impact_lbl':'Impacto esperado',
    'landing.dercas_impact_1':'Reducción de horas manuales en documentación funcional y técnica.',
    'landing.dercas_impact_2':'Implementación directa en el CRM vía API.',
    'landing.dercas_impact_3':'Consistencia documental mediante plantillas y criterios estructurados.',
    'landing.dercas_cta':'Ver proyecto →',

    // HER — header
    'her.header_back':'AlmaWolf Lab',
    'her.header_title':'Proyecto HER · V5',
    // HER — qué es
    'her.que_es_lbl':'El proyecto',
    'her.que_es_h':'El manager pregunta. Her ya lo sabe.',
    'her.que_es_p1':'Her es el sistema de inteligencia operacional de AlmaWolf. Cada empleado hace un check-in semanal por voz con un agente conversacional. El sistema transcribe, estructura y almacena lo que pasó.',
    'her.que_es_p2':'Cuando el manager quiere saber qué ha hecho su equipo, no consulta reportes: pregunta a Her en lenguaje natural. Her recupera la información del RAG y responde con trazabilidad de fuente.',
    // HER — índice
    'her.indice_lbl':'Índice',
    'her.indice_01':'El objetivo',
    'her.indice_02':'Problemas y soluciones',
    'her.indice_03':'Arquitectura',
    'her.indice_04':'Agente de check-in',
    'her.indice_05':'Agente de consulta',
    'her.indice_06':'Resultados del experimento',
    'her.indice_07':'Resultados del piloto',
    'her.indice_08':'Lo que hemos corregido',
    'her.indice_09':'Riesgos y mitigaciones',
    'her.indice_10':'Aprendizajes',
    'her.indice_11':'Lo que viene',
    'her.indice_12':'Equipo',
    // HER — objetivo
    'her.objetivo_lbl':'El objetivo',
    'her.objetivo_big':'<span class="accent">Visibilizar y compartir</span><br>el conocimiento de negocio<br>de cada individuo<br>de la organización.',
    'her.objetivo_p':'Un experimento para convertir ese conocimiento en inteligencia colectiva — de modo replicable y bajo cumplimiento normativo.',
    // HER — problema
    'her.problema_lbl':'El problema',
    'her.problema_title':'El conocimiento se evapora cada día.',
    'her.problema_sub':'Muere en reuniones, llamadas y correos…',
    'her.problema_li1':'El manager no ve qué hizo su equipo sin preguntar.',
    'her.problema_li2':'El CEO no tiene visión de grupo sin una reunión.',
    'her.problema_li3':'Hay experiencias que no tienen dónde registrarse y no dejan rastro.',
    'her.sol_lbl':'Solución',
    'her.prob1_name':'Relatividad','her.prob1_desc':'Cada persona asigna una importancia a cada tema de modo subjetivo',
    'her.sol1_name':'Priorización','her.sol1_desc':'El agente pondera cada tema por importancia real, no por quién más habla',
    'her.prob2_name':'Intermitente','her.prob2_desc':'La disponibilidad y el ánimo del interlocutor varían según el momento',
    'her.sol2_name':'Determinismo','her.sol2_desc':'Misma calidad de respuesta siempre, sin variación por estado de ánimo',
    'her.prob3_name':'Idiomas','her.prob3_desc':'Las barreras lingüísticas limitan la profundidad de la conversación',
    'her.sol3_name':'Multiidioma nativo','her.sol3_desc':'Conversa en el idioma de cada persona sin perder matices',
    'her.prob4_name':'Husos horarios','her.prob4_desc':'La diferencia horaria impide la sincronía entre equipos distribuidos',
    'her.sol4_name':'Asincronía','her.sol4_desc':'Disponible en cualquier momento, sin necesidad de coincidir en horario',
    'her.prob5_name':'Cultura','her.prob5_desc':'Los códigos culturales distintos generan malentendidos y fricción',
    'her.sol5_name':'Tropicalización','her.sol5_desc':'Adapta el tono y las referencias al contexto cultural de cada persona',
    'her.prob6_name':'Pérdida de conocimiento','her.prob6_desc':'El conocimiento tácito no queda registrado cuando las personas se van',
    'her.sol6_name':'Transferencia estructurada','her.sol6_desc':'Convierte el conocimiento conversacional en datos estructurados y reutilizables',
    // HER — arquitectura
    'her.arq_lbl':'Arquitectura',
    'her.arq_h':'Dos tipos de agentes, una misma base de conocimiento.',
    'her.arq_sub':'Los agentes de check-in capturan lo que el equipo sabe; los de consulta responden a partir de ahí, sobre esa misma base compartida.',
    'her.arq_legend1':'Check-in · capturar y guardar',
    'her.arq_legend2':'Consulta · recuperar y responder',
    // HER — fase 1
    'her.fase1_lbl':'Fase 1',
    'her.fase1_title':'Una persona, un agente dedicado.',
    'her.fase1_p':'Cada persona de la organización tiene su propio agente. Cada día mantiene con ella una conversación breve — en su idioma, a su ritmo — y recoge lo que está viviendo en el trabajo.',
    'her.fase1_sup':'Transcripción real · Piloto agosto 2026 *',
    'her.fase1_audio':'🎵 Audio · Agente María con Eliana · 26 ago 2026',
    'her.transcript_note':'',
    'her.tr_who_ag':'Agente',
    'her.tr_who_us':'Empleada',
    // HER — fase 2
    'her.fase2_lbl':'Fase 2 — Compartir',
    'her.fase2_title':'El conocimiento se comparte.',
    'her.fase2_p':'Cada manager tiene también su propio agente. Cuando lo necesita, pregunta en voz alta — en su idioma, desde donde esté — y recibe una respuesta breve construida con lo que el equipo contó.',
    'her.fase2_sup':'Transcripción real · Piloto septiembre 2026',
    'her.fase2_audio':'🎵 Audio · Manager Jorge · 14 sep 2026',
    // HER — experimento
    'her.exp_lbl':'Experimento · Junio 2026',
    'her.exp_h':'De dónde partimos — experimento de junio.',
    'her.exp_stat1':'<strong>trampas rechazadas</strong> — siempre cita la fuente',
    'her.exp_stat2':'<strong>consultas correctas</strong> — en lenguaje natural',
    'her.exp_stat3':'<strong>de media por check-in</strong> — 131 en junio',
    'her.exp_rc1_from':'Relatividad','her.exp_rc1_to':'Priorización',
    'her.exp_rc1_b':'Recupera solo lo relevante y lo sintetiza — <strong>reconstruyó una decisión repartida en 3 fechas</strong>.',
    'her.exp_rc2_from':'Intermitente','her.exp_rc2_to':'Determinismo',
    'her.exp_rc2_b':'Respuestas consistentes y trazables — <strong>5 de 5 intentos de invención rechazados</strong>.',
    'her.exp_rc3_from':'Idiomas','her.exp_rc3_to':'Multiidioma nativo',
    'her.exp_rc3_b':'Check-ins en español e inglés — <strong>voces nativas, no traducción</strong>.',
    'her.exp_rc4_from':'Agendas','her.exp_rc4_to':'Asincronía',
    'her.exp_rc4_b':'<strong>131 check-ins asíncronos</strong> sin gastar tiempo en reuniones.',
    'her.exp_rc5_from':'Cultura','her.exp_rc5_to':'Tropicalización',
    'her.exp_rc5_b':'Voz y modismos nativos por región — <strong>argentino, español y más variedades</strong>, adaptado a su contexto cultural.',
    'her.exp_rc6_from':'Pérdida','her.exp_rc6_to':'Transferencia estructurada',
    'her.exp_rc6_b':'Convierte en <strong>registros estructurados y trazables</strong> el conocimiento que se perdería, atribuido por persona, empresa y fecha.',
    // HER — piloto
    'her.piloto_lbl':'Piloto · Agosto 2026',
    'her.piloto_h':'Nueve personas, un mes de check-ins.',
    'her.piloto_stat1':'<strong>de cumplimiento</strong> — en las nueve personas',
    'her.piloto_stat2':'<strong>respuestas correctas</strong> — sobre 92 preguntas',
    'her.piloto_stat3':'<strong>llamadas en agosto</strong> — siete de nueve, cada día',
    'her.piloto_rc1_from':'Adopción','her.piloto_rc1_to':'Un hábito diario',
    'her.piloto_rc1_b':'Siete de las nueve reportan todos los días — <strong>la racha más larga es de 19 días seguidos</strong>.',
    'her.piloto_rc2_from':'Constancia','her.piloto_rc2_to':'Semana a semana',
    'her.piloto_rc2_b':'El hábito se afianzó durante el mes — <strong>del 97% al 100% en cuatro semanas</strong>.',
    'her.piloto_rc3_from':'Fiabilidad','her.piloto_rc3_to':'Un servicio que aguanta',
    'her.piloto_rc3_b':'De las 169 llamadas de agosto, el <strong>90% funcionó sin ningún fallo</strong> — y ninguna se cortó.',
    'her.piloto_rc4_from':'Resumen','her.piloto_rc4_to':'Se escucha entero',
    'her.piloto_rc4_b':'El <strong>85% escucha el resumen completo</strong> — las novedades les llegan cada mañana.',
    'her.piloto_rc5_from':'Precisión','her.piloto_rc5_to':'Respuestas sólidas',
    'her.piloto_rc5_b':'Probado con 92 preguntas reales — el <strong>82% respondidas correctamente</strong>, y avisa cuando no tiene datos.',
    'her.piloto_rc6_from':'Siempre responde','her.piloto_rc6_to':'No rellena los huecos',
    'her.piloto_rc6_b':'Toda pregunta recibe respuesta, aunque sea <strong>«no tengo ese dato»</strong>.',
    // HER — corregido
    'her.corr_lbl':'Lo que hemos corregido',
    'her.corr_h':'Del experimento al piloto: cinco cosas corregidas.',
    'her.corr_lbl_before':'Antes','her.corr_lbl_after':'Después',
    'her.corr1_before':'<strong>Turnos de palabra</strong> · el agente interrumpía y repetía preguntas',
    'her.corr1_after':'Espera y deja terminar a cada persona.',
    'her.corr2_before':'<strong>Extracción de datos</strong> · el modo de razonamiento triplicaba la espera y perdía datos',
    'her.corr2_after':'Sin ese modo: tres veces más rápido y sin pérdidas.',
    'her.corr3_before':'<strong>Huso horario</strong> · «ayer» fallaba hasta 16 h para managers fuera de Madrid',
    'her.corr3_after':'Se usa el huso de cada manager.',
    'her.corr4_before':'<strong>Silencios</strong> · la llamada se cortaba mientras la persona pensaba',
    'her.corr4_after':'Espera mientras piensas.',
    'her.corr5_before':'<strong>Respuestas cortadas</strong> · el agente truncaba las respuestas a medias',
    'her.corr5_after':'Ahora llegan a su final natural.',
    // HER — riesgos
    'her.riesgos_lbl':'Riesgos y mitigaciones',
    'her.riesgos_h':'Cada riesgo tiene su mitigación por diseño.',
    'her.riesgo_lbl':'Riesgo','her.mit_lbl':'Mitigación',
    'her.riesgo1':'Fatiga de check-in','her.mit1':'Breve, asíncrona y en su idioma.',
    'her.riesgo2':'Privacidad y datos','her.mit2':'Datos en la UE y consentimiento.',
    'her.riesgo3':'Respuestas incorrectas','her.mit3':'Respuestas siempre trazables.',
    'her.riesgo4':'Parecer un formulario','her.mit4':'Una conversación real, no un cuestionario leído en voz alta.',
    'her.riesgo5':'Atados a un proveedor','her.mit5':'Ningún proveedor es imprescindible: todos se pueden sustituir.',
    'her.riesgo6':'Usabilidad','her.mit6':'Llamados y notificaciones por parte del agente.',
    // HER — aprendizajes
    'her.apr_lbl':'Aprendizajes · Piloto agosto 2026',
    'her.apr_h':'Lo que el piloto dejó claro.',
    'her.apr_rc1_t':'Estabilidad',
    'her.apr_rc1_b':'El sistema alcanza el 80 % de estabilidad técnica, pero la tasa de check-ins completados es del 100 %. La rutina se sostuvo independientemente de los cortes.',
    'her.apr_rc2_t':'IA Conversacional',
    'her.apr_rc2_b':'El estado del arte de la voz conversacional aún no ofrece el 100 % de estabilidad. La tecnología está madurando y el sistema permite pruebas A/B con distintos frameworks y proveedores para mejorar la experiencia.',
    'her.apr_rc3_t':'Gobernanza',
    'her.apr_rc3_b':'El acceso universal no es necesario ni recomendable. La siguiente fase implementará jerarquía por equipos: cada manager accede solo a su capa.',
    'her.apr_rc4_t':'Capacidades',
    'her.apr_rc4_b':'Las herramientas de consulta son extensibles. Las comparaciones complejas entre personas requieren evolucionar el RAG y están previstas como evolutivo.',
    // HER — siguientes
    'her.sig_lbl':'Lo que viene',
    'her.sig_h':'Roadmap.',
    'her.sig_nc1_n':'01 · Idiomas','her.sig_nc1_t':'Más idiomas','her.sig_nc1_d':'Más idiomas, más variantes culturales y un agente para cada una.',
    'her.sig_nc2_n':'02 · Integraciones','her.sig_nc2_t':'Más fuentes','her.sig_nc2_d':'CRM, calendarios y WhatsApp, para que el agente de consulta también los use.',
    'her.sig_nc3_n':'03 · Acceso','her.sig_nc3_t':'Permisos','her.sig_nc3_d':'El acceso sigue el organigrama: un manager ve su equipo, un director su área.',
    'her.sig_nc4_n':'04 · Canal','her.sig_nc4_t':'Canal multimodal','her.sig_nc4_d':'Llamadas inbound y outbound, email y otros canales, para que el agente llegue donde está la persona.',
    // HER — equipo
    'her.equipo_lbl':'Equipo',
    'her.equipo_h':'Quién hay detrás.',
    'her.equipo_role1':'Responsable',
    'her.equipo_role2':'Programme Manager',
    'her.equipo_role3':'Executive Sponsor',

    // COEXISTENCIA — header
    'coex.header_back':'AlmaWolf Lab',
    'coex.header_title':'Coexistencia',
    // COEXISTENCIA — qué es
    'coex.que_es_lbl':'El proyecto',
    'coex.que_es_h':'Woztell genera datos comerciales valiosos. Coexistencia los conecta con todo.',
    'coex.que_es_p1':'Coexistencia es la capa de integración entre Woztell y el resto del stack de AlmaWolf. Las conversaciones comerciales de WhatsApp tienen visibilidad donde importa: en el sistema de inteligencia operacional, en el CRM y en los calendarios del equipo.',
    'coex.que_es_p2':'Cada integración es un módulo independiente. Las conversaciones fluyen hacia HER para consulta en lenguaje natural, enriquecen las fichas de contacto en el CRM y se cruzan con los calendarios para construir una visión completa de la actividad comercial.',
    // COEXISTENCIA — integraciones
    'coex.int_lbl':'Integraciones',
    'coex.int_h':'Un hub de datos comerciales.<br>Módulo a módulo.',
    'coex.card1_title':'Resúmenes de conversaciones',
    'coex.card1_desc':'Woztell procesa las conversaciones de WhatsApp del equipo comercial y genera resúmenes con un LLM. Los resúmenes se lanzan bajo demanda y llegan a los managers para que tengan visibilidad de lo que pasa en cada conversación.',
    'coex.card2_title':'CRM · Enriquecimiento de contactos',
    'coex.card2_soon':'Próximamente',
    'coex.card2_desc':'Cruza la información de las conversaciones con los datos de los clientes en el CRM. Permite identificar con quién se está hablando y enriquecer las fichas de contacto con lo que ocurre en WhatsApp.',
    'coex.card3_title':'Calendarios',
    'coex.card3_desc':'Al activarse en una conversación de WhatsApp, sincroniza los calendarios del usuario y muestra los slots disponibles a la persona que solicita la reunión para que pueda proponer día y hora.',
    'coex.card4_title':'Her',
    'coex.card4_desc':'HER se integra en Coexistencia mediante tools que ponen la información de cada módulo a disposición del agente de consulta. El manager puede preguntar por voz sobre resúmenes, contactos o actividad comercial.',

    // DERCAS — header
    'dercas.header_back':'AlmaWolf Lab',
    'dercas.header_title':'DERS / DERCAS Automation',
    // DERCAS — qué es
    'dercas.que_es_lbl':'El proyecto',
    'dercas.que_es_h':'El consultor graba y dicta. El sistema documenta y configura.',
    'dercas.que_es_p1':'Cada proyecto de consultoría genera dos documentos críticos: el DERS (Documento de Especificación de Requerimientos del Sistema) y el DERCAS (Documentación de Especificaciones, Requisitos y Criterios de Aceptación de Software). Hasta ahora, ambos se redactaban manualmente después de cada reunión con cliente.',
    'dercas.que_es_p2':'DERS/DERCAS Automation convierte las grabaciones en borradores estructurados listos para revisión y prepara la configuración para el CRM. El consultor solo sube los archivos y revisa el resultado.',
    // DERCAS — arquitectura
    'dercas.arq_lbl':'Arquitectura',
    'dercas.arq_h':'Tres módulos encadenados.<br>Cada uno autónomo.',
    'dercas.mod1_title':'DERS',
    'dercas.mod1_desc':'Detecta nuevas grabaciones en WorkDrive, transcribe en paralelo, extrae requerimientos con trazabilidad reunión + minuto, e inyecta boilerplate GDPR y formación. Genera PDF en 3 pasadas.',
    'dercas.mod2_title':'DERCAS',
    'dercas.mod2_desc':'El consultor dicta la solución en audio. El sistema empareja con el DERS generado, aplica RAG sobre DERCAS anteriores y el catálogo Zoho, y genera el documento estructurado por requerimiento con criterios de viabilidad.',
    'dercas.mod3_title':'Parametrización CRM',
    'dercas.mod3_desc':'Envío directo de la configuración del DERCAS al CRM vía Zoho REST. Requiere aprobación humana antes de cada escritura. Reemplaza la integración Zoho MCP descartada por limitaciones técnicas.',
    // DERCAS — imágenes
    'dercas.diagrama_alt':'De la reunión con el cliente a la implementación en Zoho CRM',
    'dercas.guia_alt':'Guía rápida para consultores',
    // DERCAS — siguientes fases
    'dercas.sig_lbl':'Siguientes fases',
    'dercas.sig_h':'Cuatro frentes simultáneos.',
    'dercas.sig_nc1_n':'Operaciones','dercas.sig_nc1_t':'Escalado operativo',
    'dercas.sig_nc1_d':'Alerta configurable por consultor en WorkDrive. Notificaciones a Zoho Cliq para visibilidad del equipo. Índice de DERS en Data Store para consulta histórica entre proyectos.',
    'dercas.sig_nc2_n':'Infraestructura','dercas.sig_nc2_t':'Catalyst Production',
    'dercas.sig_nc2_d':'Despliegue del sistema en Catalyst Production con cuenta de equipo compartida. Permite escalar sin límite de proyectos y centralizar el acceso para todos los consultores.',
    'dercas.sig_nc3_n':'Experiencia consultor','dercas.sig_nc3_t':'Revisor por voz',
    'dercas.sig_nc3_d':'DERS entregado en Word editable para marcado de correcciones. Correcciones dictadas por voz procesadas de forma incremental. Ciclo de revisión en sandbox antes de entrega al cliente.',
    'dercas.sig_nc4_n':'CRM','dercas.sig_nc4_t':'Parametrización Zoho',
    'dercas.sig_nc4_d':'Implementación del DERCAS directamente en Zoho CRM vía REST. Sandbox para validación antes de producción. Aprobación humana obligatoria en cada escritura al CRM.',
  },

  en: {
    // LANDING — gate
    'landing.gate_sub':'Restricted area.<br>Enter the password to continue.',
    'landing.gate_placeholder':'Password',
    'landing.gate_btn':'Sign in',
    'landing.gate_err':'Incorrect password.',
    // LANDING — nav
    'landing.nav_que_es':'What is it',
    'landing.nav_proyectos':'Projects',
    // LANDING — qué es
    'landing.que_es_lbl':'What is AlmaWolf Lab',
    'landing.que_es_h':'The innovation department of the AlmaWolf group.',
    'landing.que_es_p1':'AlmaWolf Lab is the innovation department of the AlmaWolf group. From here we explore new ways of working, automate processes and develop internal products that combine technology, artificial intelligence and operational experience.',
    'landing.que_es_p2':'Our approach is practical: every initiative stems from a real need, is validated with users and evolves into a measurable, scalable solution that delivers business value.',
    // LANDING — proyectos
    'landing.proyectos_lbl':'Projects',
    'landing.proyectos_title':'Solutions in motion.',
    // LANDING — HER card
    'landing.her_desc':'Conversational operational intelligence system for the AlmaWolf group. Captures team activity data, structures it and converts it into knowledge queryable via natural language.',
    'landing.her_impact_lbl':'Impact generated',
    'landing.her_impact_1':'Greater weekly visibility into team progress and blockers.',
    'landing.her_impact_2':'Agents that assist and share knowledge with every employee.',
    'landing.her_impact_3':'Centralisation of knowledge generated in daily activity.',
    'landing.her_cta':'View HER project →',
    // LANDING — Coexistencia card
    'landing.coex_desc':'Integration hub connecting Woztell commercial data with AlmaWolf systems: operational intelligence, CRM, calendars and whatever comes next.',
    'landing.coex_impact_lbl':'Impact generated',
    'landing.coex_impact_1':'Visibility into WhatsApp commercial conversations and interactions.',
    'landing.coex_impact_2':'Automated matching between conversations and calendars.',
    'landing.coex_impact_3':'Automatic identification of conversations by client.',
    'landing.coex_cta':'View Coexistencia project →',
    // LANDING — DERCAS card
    'landing.dercas_desc':'Automates the consulting chain from client meetings to the generation of functional and technical documentation ready for human review.',
    'landing.dercas_impact_lbl':'Expected impact',
    'landing.dercas_impact_1':'Reduction of manual hours in functional and technical documentation.',
    'landing.dercas_impact_2':'Direct implementation in the CRM via API.',
    'landing.dercas_impact_3':'Document consistency through structured templates and criteria.',
    'landing.dercas_cta':'View project →',

    // HER — header
    'her.header_back':'AlmaWolf Lab',
    'her.header_title':'Project HER · V5',
    // HER — qué es
    'her.que_es_lbl':'The project',
    'her.que_es_h':'The manager asks. Her already knows.',
    'her.que_es_p1':'Her is AlmaWolf\'s operational intelligence system. Each employee does a weekly voice check-in with a conversational agent. The system transcribes, structures and stores what happened.',
    'her.que_es_p2':'When a manager wants to know what their team has been doing, they don\'t check reports: they ask Her in natural language. Her retrieves the information from the RAG and responds with source traceability.',
    // HER — índice
    'her.indice_lbl':'Index',
    'her.indice_01':'The objective',
    'her.indice_02':'Problems and solutions',
    'her.indice_03':'Architecture',
    'her.indice_04':'Check-in agent',
    'her.indice_05':'Query agent',
    'her.indice_06':'Experiment results',
    'her.indice_07':'Pilot results',
    'her.indice_08':'What we\'ve fixed',
    'her.indice_09':'Risks and mitigations',
    'her.indice_10':'Learnings',
    'her.indice_11':'What\'s next',
    'her.indice_12':'Team',
    // HER — objetivo
    'her.objetivo_lbl':'The objective',
    'her.objetivo_big':'<span class="accent">Make visible and share</span><br>the business knowledge<br>of every individual<br>in the organisation.',
    'her.objetivo_p':'An experiment to convert that knowledge into collective intelligence — in a replicable way and under regulatory compliance.',
    // HER — problema
    'her.problema_lbl':'The problem',
    'her.problema_title':'Knowledge evaporates every day.',
    'her.problema_sub':'It dies in meetings, calls and emails…',
    'her.problema_li1':'The manager can\'t see what their team did without asking.',
    'her.problema_li2':'The CEO has no group-wide view without a meeting.',
    'her.problema_li3':'There are experiences with nowhere to be recorded that leave no trace.',
    'her.sol_lbl':'Solution',
    'her.prob1_name':'Subjectivity','her.prob1_desc':'Each person assigns importance to each topic in a subjective way',
    'her.sol1_name':'Prioritisation','her.sol1_desc':'The agent weighs each topic by real importance, not by who speaks most',
    'her.prob2_name':'Inconsistency','her.prob2_desc':'The interlocutor\'s availability and mood vary depending on the moment',
    'her.sol2_name':'Determinism','her.sol2_desc':'Same response quality every time, with no variation by mood',
    'her.prob3_name':'Languages','her.prob3_desc':'Language barriers limit the depth of conversation',
    'her.sol3_name':'Native multilingual','her.sol3_desc':'Converses in each person\'s language without losing nuance',
    'her.prob4_name':'Time zones','her.prob4_desc':'Time differences prevent synchrony between distributed teams',
    'her.sol4_name':'Asynchrony','her.sol4_desc':'Available at any time, with no need to coincide in schedule',
    'her.prob5_name':'Culture','her.prob5_desc':'Different cultural codes create misunderstandings and friction',
    'her.sol5_name':'Localisation','her.sol5_desc':'Adapts tone and references to each person\'s cultural context',
    'her.prob6_name':'Knowledge loss','her.prob6_desc':'Tacit knowledge is not recorded when people leave',
    'her.sol6_name':'Structured transfer','her.sol6_desc':'Converts conversational knowledge into structured, reusable records',
    // HER — arquitectura
    'her.arq_lbl':'Architecture',
    'her.arq_h':'Two types of agents, one shared knowledge base.',
    'her.arq_sub':'Check-in agents capture what the team knows; query agents respond from there, on that same shared base.',
    'her.arq_legend1':'Check-in · capture and store',
    'her.arq_legend2':'Query · retrieve and respond',
    // HER — fase 1
    'her.fase1_lbl':'Phase 1',
    'her.fase1_title':'One person, one dedicated agent.',
    'her.fase1_p':'Every person in the organisation has their own agent. Each day it holds a brief conversation with them — in their language, at their pace — and captures what they\'re experiencing at work.',
    'her.fase1_sup':'Real transcript · August 2026 pilot *',
    'her.fase1_audio':'🎵 Audio · Agent María with Eliana · 26 Aug 2026',
    'her.transcript_note':'(Original transcript in Spanish)',
    'her.tr_who_ag':'Agent',
    'her.tr_who_us':'Employee',
    // HER — fase 2
    'her.fase2_lbl':'Phase 2 — Share',
    'her.fase2_title':'Knowledge is shared.',
    'her.fase2_p':'Every manager also has their own agent. When needed, they ask out loud — in their language, from wherever they are — and receive a brief response built from what the team shared.',
    'her.fase2_sup':'Real transcript · September 2026 pilot',
    'her.fase2_audio':'🎵 Audio · Manager Jorge · 14 Sep 2026',
    // HER — experimento
    'her.exp_lbl':'Experiment · June 2026',
    'her.exp_h':'Where we started — the June experiment.',
    'her.exp_stat1':'<strong>hallucinations rejected</strong> — always cites source',
    'her.exp_stat2':'<strong>correct queries</strong> — in natural language',
    'her.exp_stat3':'<strong>average per check-in</strong> — 131 in June',
    'her.exp_rc1_from':'Subjectivity','her.exp_rc1_to':'Prioritisation',
    'her.exp_rc1_b':'Retrieves only what\'s relevant and synthesises it — <strong>reconstructed a decision spread across 3 dates</strong>.',
    'her.exp_rc2_from':'Inconsistency','her.exp_rc2_to':'Determinism',
    'her.exp_rc2_b':'Consistent, traceable responses — <strong>5 out of 5 hallucination attempts rejected</strong>.',
    'her.exp_rc3_from':'Languages','her.exp_rc3_to':'Native multilingual',
    'her.exp_rc3_b':'Check-ins in Spanish and English — <strong>native voices, not translations</strong>.',
    'her.exp_rc4_from':'Schedules','her.exp_rc4_to':'Asynchrony',
    'her.exp_rc4_b':'<strong>131 asynchronous check-ins</strong> without spending time in meetings.',
    'her.exp_rc5_from':'Culture','her.exp_rc5_to':'Localisation',
    'her.exp_rc5_b':'Native voice and idioms by region — <strong>Argentine, Spanish and more varieties</strong>, adapted to each person\'s cultural context.',
    'her.exp_rc6_from':'Loss','her.exp_rc6_to':'Structured transfer',
    'her.exp_rc6_b':'Converts into <strong>structured, traceable records</strong> the knowledge that would otherwise be lost, attributed by person, company and date.',
    // HER — piloto
    'her.piloto_lbl':'Pilot · August 2026',
    'her.piloto_h':'Nine people, one month of check-ins.',
    'her.piloto_stat1':'<strong>compliance rate</strong> — across all nine people',
    'her.piloto_stat2':'<strong>correct answers</strong> — out of 92 questions',
    'her.piloto_stat3':'<strong>calls in August</strong> — seven of nine, every day',
    'her.piloto_rc1_from':'Adoption','her.piloto_rc1_to':'A daily habit',
    'her.piloto_rc1_b':'Seven of the nine report every day — <strong>the longest streak is 19 consecutive days</strong>.',
    'her.piloto_rc2_from':'Consistency','her.piloto_rc2_to':'Week after week',
    'her.piloto_rc2_b':'The habit solidified during the month — <strong>from 97% to 100% over four weeks</strong>.',
    'her.piloto_rc3_from':'Reliability','her.piloto_rc3_to':'A service that holds',
    'her.piloto_rc3_b':'Of the 169 August calls, <strong>90% ran without any failure</strong> — and none dropped.',
    'her.piloto_rc4_from':'Summary','her.piloto_rc4_to':'Listened to in full',
    'her.piloto_rc4_b':'<strong>85% listen to the full summary</strong> — updates reach them every morning.',
    'her.piloto_rc5_from':'Accuracy','her.piloto_rc5_to':'Solid answers',
    'her.piloto_rc5_b':'Tested with 92 real questions — <strong>82% answered correctly</strong>, and it says when it doesn\'t have data.',
    'her.piloto_rc6_from':'Always responds','her.piloto_rc6_to':'Doesn\'t fill the gaps',
    'her.piloto_rc6_b':'Every question gets an answer, even if it\'s <strong>"I don\'t have that data"</strong>.',
    // HER — corregido
    'her.corr_lbl':'What we\'ve fixed',
    'her.corr_h':'From experiment to pilot: five things fixed.',
    'her.corr_lbl_before':'Before','her.corr_lbl_after':'After',
    'her.corr1_before':'<strong>Turn-taking</strong> · the agent interrupted and repeated questions',
    'her.corr1_after':'Waits and lets each person finish.',
    'her.corr2_before':'<strong>Data extraction</strong> · reasoning mode tripled the wait and lost data',
    'her.corr2_after':'Without that mode: three times faster and no losses.',
    'her.corr3_before':'<strong>Time zone</strong> · "yesterday" failed for up to 16 h for managers outside Madrid',
    'her.corr3_after':'Each manager\'s own time zone is used.',
    'her.corr4_before':'<strong>Silences</strong> · the call dropped while the person was thinking',
    'her.corr4_after':'Waits while you think.',
    'her.corr5_before':'<strong>Truncated responses</strong> · the agent cut responses off mid-sentence',
    'her.corr5_after':'They now reach their natural end.',
    // HER — riesgos
    'her.riesgos_lbl':'Risks and mitigations',
    'her.riesgos_h':'Each risk has its mitigation by design.',
    'her.riesgo_lbl':'Risk','her.mit_lbl':'Mitigation',
    'her.riesgo1':'Check-in fatigue','her.mit1':'Brief, asynchronous and in their language.',
    'her.riesgo2':'Privacy and data','her.mit2':'Data in the EU and consent.',
    'her.riesgo3':'Incorrect responses','her.mit3':'Responses are always traceable.',
    'her.riesgo4':'Feeling like a form','her.mit4':'A real conversation, not a questionnaire read aloud.',
    'her.riesgo5':'Vendor lock-in','her.mit5':'No single vendor is essential: all can be replaced.',
    'her.riesgo6':'Usability','her.mit6':'Calls and notifications from the agent.',
    // HER — aprendizajes
    'her.apr_lbl':'Learnings · August 2026 pilot',
    'her.apr_h':'What the pilot made clear.',
    'her.apr_rc1_t':'Stability',
    'her.apr_rc1_b':'The system reaches 80% technical stability, but the completed check-in rate is 100%. The routine held regardless of outages.',
    'her.apr_rc2_t':'Conversational AI',
    'her.apr_rc2_b':'The state of the art in conversational voice does not yet offer 100% stability. The technology is maturing and the system allows A/B testing with different frameworks and providers to improve the experience.',
    'her.apr_rc3_t':'Governance',
    'her.apr_rc3_b':'Universal access is neither necessary nor advisable. The next phase will implement team-level hierarchy: each manager only accesses their own layer.',
    'her.apr_rc4_t':'Capabilities',
    'her.apr_rc4_b':'The query tools are extensible. Complex comparisons between people require evolving the RAG and are planned as a future evolution.',
    // HER — siguientes
    'her.sig_lbl':'What\'s next',
    'her.sig_h':'Roadmap.',
    'her.sig_nc1_n':'01 · Languages','her.sig_nc1_t':'More languages','her.sig_nc1_d':'More languages, more cultural variants and a dedicated agent for each.',
    'her.sig_nc2_n':'02 · Integrations','her.sig_nc2_t':'More sources','her.sig_nc2_d':'CRM, calendars and WhatsApp, so the query agent can also use them.',
    'her.sig_nc3_n':'03 · Access','her.sig_nc3_t':'Permissions','her.sig_nc3_d':'Access follows the org chart: a manager sees their team, a director their area.',
    'her.sig_nc4_n':'04 · Channel','her.sig_nc4_t':'Multimodal channel','her.sig_nc4_d':'Inbound and outbound calls, email and other channels, so the agent reaches people wherever they are.',
    // HER — equipo
    'her.equipo_lbl':'Team',
    'her.equipo_h':'Who\'s behind it.',
    'her.equipo_role1':'Lead',
    'her.equipo_role2':'Programme Manager',
    'her.equipo_role3':'Executive Sponsor',

    // COEXISTENCIA — header
    'coex.header_back':'AlmaWolf Lab',
    'coex.header_title':'Coexistencia',
    // COEXISTENCIA — qué es
    'coex.que_es_lbl':'The project',
    'coex.que_es_h':'Woztell generates valuable commercial data. Coexistencia connects it with everything.',
    'coex.que_es_p1':'Coexistencia is the integration layer between Woztell and the rest of the AlmaWolf stack. WhatsApp commercial conversations have visibility where it matters: in the operational intelligence system, in the CRM and in the team\'s calendars.',
    'coex.que_es_p2':'Each integration is an independent module. Conversations flow into HER for natural language queries, enrich contact records in the CRM, and are cross-referenced with calendars to build a complete view of commercial activity.',
    // COEXISTENCIA — integraciones
    'coex.int_lbl':'Integrations',
    'coex.int_h':'A commercial data hub.<br>Module by module.',
    'coex.card1_title':'Conversation summaries',
    'coex.card1_desc':'Woztell processes the sales team\'s WhatsApp conversations and generates summaries using an LLM. Summaries are triggered on demand and reach managers so they have visibility into what\'s happening in each conversation.',
    'coex.card2_title':'CRM · Contact enrichment',
    'coex.card2_soon':'Coming soon',
    'coex.card2_desc':'Cross-references conversation data with client records in the CRM. Identifies who is being spoken to and enriches contact profiles with what\'s happening on WhatsApp.',
    'coex.card3_title':'Calendars',
    'coex.card3_desc':'When activated in a WhatsApp conversation, it syncs the user\'s calendars and shows available slots to the person requesting the meeting so they can propose a date and time.',
    'coex.card4_title':'Her',
    'coex.card4_desc':'HER integrates into Coexistencia through tools that make each module\'s information available to the query agent. The manager can ask by voice about summaries, contacts or commercial activity.',

    // DERCAS — header
    'dercas.header_back':'AlmaWolf Lab',
    'dercas.header_title':'DERS / DERCAS Automation',
    // DERCAS — qué es
    'dercas.que_es_lbl':'The project',
    'dercas.que_es_h':'The consultant records and dictates. The system documents and configures.',
    'dercas.que_es_p1':'Every consulting project generates two critical documents: the DERS (System Requirements Specification Document) and the DERCAS (Software Specifications, Requirements and Acceptance Criteria Documentation). Until now, both were written manually after each client meeting.',
    'dercas.que_es_p2':'DERS/DERCAS Automation converts recordings into structured drafts ready for review and prepares the CRM configuration. The consultant only uploads the files and reviews the result.',
    // DERCAS — arquitectura
    'dercas.arq_lbl':'Architecture',
    'dercas.arq_h':'Three chained modules.<br>Each autonomous.',
    'dercas.mod1_title':'DERS',
    'dercas.mod1_desc':'Detects new recordings in WorkDrive, transcribes in parallel, extracts requirements with meeting + minute traceability, and injects GDPR boilerplate and training content. Generates PDF in 3 passes.',
    'dercas.mod2_title':'DERCAS',
    'dercas.mod2_desc':'The consultant dictates the solution in audio. The system pairs it with the generated DERS, applies RAG over previous DERCAS and the Zoho catalogue, and generates the document structured by requirement with feasibility criteria.',
    'dercas.mod3_title':'CRM Parametrisation',
    'dercas.mod3_desc':'Direct submission of DERCAS configuration to the CRM via Zoho REST. Requires human approval before each write. Replaces the Zoho MCP integration discarded due to technical limitations.',
    // DERCAS — imágenes
    'dercas.diagrama_alt':'From client meeting to implementation in Zoho CRM',
    'dercas.guia_alt':'Quick guide for consultants',
    // DERCAS — siguientes fases
    'dercas.sig_lbl':'Next phases',
    'dercas.sig_h':'Four simultaneous fronts.',
    'dercas.sig_nc1_n':'Operations','dercas.sig_nc1_t':'Operational scaling',
    'dercas.sig_nc1_d':'Configurable alerts per consultant in WorkDrive. Notifications to Zoho Cliq for team visibility. DERS index in Data Store for historical queries across projects.',
    'dercas.sig_nc2_n':'Infrastructure','dercas.sig_nc2_t':'Catalyst Production',
    'dercas.sig_nc2_d':'System deployment on Catalyst Production with a shared team account. Allows unlimited scaling across projects and centralised access for all consultants.',
    'dercas.sig_nc3_n':'Consultant experience','dercas.sig_nc3_t':'Voice reviewer',
    'dercas.sig_nc3_d':'DERS delivered in editable Word format for marking corrections. Voice-dictated corrections processed incrementally. Revision cycle in sandbox before client delivery.',
    'dercas.sig_nc4_n':'CRM','dercas.sig_nc4_t':'Zoho Parametrisation',
    'dercas.sig_nc4_d':'Direct DERCAS implementation in Zoho CRM via REST. Sandbox for validation before production. Mandatory human approval for each write to the CRM.',
  }
};

function setLang(lang) {
  if (!translations[lang]) return;
  const dict = translations[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.dataset.i18n;
    var val = dict[key];
    if (val === undefined) return;
    if (el.tagName === 'INPUT') {
      el.placeholder = val;
    } else if ('i18nHtml' in el.dataset) {
      el.innerHTML = val;
    } else {
      el.textContent = val;
    }
  });
  document.querySelectorAll('[data-i18n-alt]').forEach(function(el) {
    var key = el.dataset.i18nAlt;
    var val = dict[key];
    if (val !== undefined) el.alt = val;
  });
  document.querySelectorAll('.lang-switch button').forEach(function(btn) {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  localStorage.setItem('aw_lang', lang);
}

function t(key) {
  var lang = localStorage.getItem('aw_lang') || 'es';
  return (translations[lang] && translations[lang][key]) || translations['es'][key] || key;
}

window.setLang = setLang;
window.__i18n = { setLang: setLang, t: t };

document.addEventListener('DOMContentLoaded', function() {
  var saved = localStorage.getItem('aw_lang') || 'es';
  setLang(saved);
});
