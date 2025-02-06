export const siteConfig = {
  name: 'Windel Sistemas Ltda',
  url: 'https://www.windel.com.br/',
  ogImage: 'https://www.windel.com.br/front/images/logos/logo.svg',
  description:
    'Emita seus documentos fiscais de forma prática e muito fácil. Sua empresa gerenciada com eficiência máxima gerando redução de custos e despesas e muito mais produtividade!',
}

export const perPage = process.env.REGISTER_PER_PAGE || 25

export type SiteConfig = typeof siteConfig

export const tableWidth = {
  filter: 9,
  drawer: 8,
  table: 12,
}

export const filterWidth = {
  filter: 3,
}

export const drawerWidth = {
  drawer: 4,
}

/* 
100 | 100. Sistema Windel Web - Compacto            | Cadastros, Financeiro, Compras, Orçamentos, Pedidos e Ordens de Serviço.
101 | 101. Sistema Windel Web - NF-e ME             | Emissão de Notas Fiscais Eletrônicas, Cadastros de Clientes e Produtos.
102 | 102. Sistema Windel Web - NFC-e ME            | Emissão de Nota Fiscal de Consumidor Eletrônica, Cadastros de Clientes e Produtos.
103 | 103. Sistema Windel Web - NFS-e ME            | Emissão de Notas Fiscais Eletrônicas de Serviços e Cadastros.
104 | 104. Sistema Windel Web - NF-e Produtor Rural | Emissão de NF-e Produtor Rural, Cadastros de Clientes e Produtos.
105 | 105. Sistema Windel Web - CT-e                | Emissão de CT-e, Cadastros de Clientes e Produtos.
200 | 200. Módulo Windel Web - NFS-e                | Emissão de NFS-e.
201 | 201. Módulo Windel Web - NFC-e                | Emissão de NFC-e.
202 | 202. Módulo Windel Web - MDF-e                | Emissão de MDF-e.
203 | 203. Módulo Windel Web - NF-e Produtor Rural  | Emissão de NF-e Produtor Rural.
204 | 204. Módulo Windel Web - Financeiro           | Módulo Windel Web - Financeiro: Contas a Pagar, Contas a Receber e Caixa.
205 | 205. Módulo Windel Web - Compras              | Módulo Windel Web - Compras: Compras e Importação XML.
206 | 206. Módulo Windel Web - Orçamentos e Pedidos | Emissão de Orçamentos e Pedidos.
211 | 211. Módulo Windel Web - CT-e                 | Emissão de CT-e.
*/

export const permissionsModule: any = {
  'Contas à receber': [100, 204],
  'Contas à pagar': [100, 204],
  'Lançamentos de caixa': [100, 204],
  'Lançamentos de banco': [100, 204],
  'Notas de entrada': [100, 205],
  'Importação XML': [100, 205],
  'Ordem de compra': [100, 205],
  'Solicitação de compra': [100, 205],
  'Monitor NF-e': [100, 205],
  Pedidos: [100, 206],
  Orçamentos: [100, 206],
  'Ordens de serviço': [100, 206],
  'NFC-e': [102, 201],
  'NF-e': [101, 103, 104, 200, 203, 214],
  'MDF-e': [202],
  'CT-e': [105, 211],
}

export const permissionPagesMap: Record<string, string> = {
  '/dashboard/charts/finance': 'liberaDashboard',
  '/dashboard/charts/sales': 'liberaDashboard',
  '/dashboard/charts/launches': 'liberaDashboard',
  '/dashboard/charts/curvaABC': 'liberaDashboard',
  '/reports': 'liberaRelatorios',
  '/person': 'liberaCadastros',
  '/product': 'liberaCadastros',
  '/tribute': 'liberaCadastros',
  '/finance': 'liberaCadastros',
  '/sales': 'liberaCadastros',
  '/printLabels': 'liberaCadastros',
  '/accounts': 'liberaFinanceiro',
  '/entries': 'liberaFinanceiro',
  '/receipt': 'liberaFinanceiro',
  '/dailyUpdate': 'liberaFinanceiro',
  '/commissions': 'liberaFinanceiro',
  '/docs/purchase': 'liberaCompras',
  '/docs/importXML': 'liberaCompras',
  '/docs/purchaseRequest': 'liberaCompras',
  '/docs/purchaseOrder': 'liberaCompras',
  '/docs': 'liberaVendas',
}

export const permissionPages = [
  { label: 'Pessoas', value: '/reports/person', key: '' },
  { label: 'Produtos', value: '/reports/products', key: '' },
  { label: 'Financeiro', value: '/reports/finance', key: '' },
  { label: 'Compras', value: '/reports/purchase', key: '' },
  { label: 'Vendas', value: '/reports/sales', key: '' },
  { label: 'Lançamentos', value: '/reports/launches', key: '' },
  { label: 'Comissões', value: '/reports/commissions', key: '' },

  { label: 'Cadastrar clientes', value: '/person/client/form', key: 'Clientes' },
  { label: 'Clientes', value: '/person/client', key: '' },
  { label: 'Cadastrar fornecedores', value: '/person/supplier/form', key: 'Fornecedores' },
  { label: 'Fornecedores', value: '/person/supplier', key: '' },
  { label: 'Cadastrar funcionários', value: '/person/employers/form', key: 'Funcionários' },
  { label: 'Funcionários', value: '/person/employers', key: '' },
  { label: 'Cadastrar transportadoras', value: '/person/transports/form', key: 'Transportadoras' },
  { label: 'Transportadoras', value: '/person/transports', key: 'Transportadoras' },
  { label: 'Ramos de atividade', value: '/person/branches', key: '' },
  { label: 'Regiões', value: '/person/regions', key: '' },

  { label: 'Produtos', value: '/product/products', key: '' },
  { label: 'Cadastrar ajustes de estoque', value: '/product/adjustment/form', key: '' },
  { label: 'Ajustes de estoque', value: '/product/adjustment', key: '' },
  { label: 'Marcas', value: '/product/mark', key: '' },
  { label: 'Classificação', value: '/product/classification', key: '' },
  { label: 'Unidades de medida', value: '/product/units', key: '' },

  { label: 'Condições de pagamento', value: '/finance/paymentConditions', key: '' },
  { label: 'Históricos de lançamentos', value: '/finance/historic', key: '' },
  { label: 'Formas de pagamento', value: '/finance/paymentForms', key: '' },
  { label: 'Plano de contas', value: '/finance/chartAccounts', key: '' },
  { label: 'Centro de custos', value: '/finance/costCenter', key: '' },
  { label: 'Moedas e cotações', value: '/finance/currenciesAndQuotes', key: '' },
  { label: 'Bancos', value: '/finance/banks', key: '' },
  { label: 'Terminais POS', value: '/finance/terminalPOS', key: '' },

  { label: 'Naturezas de operação', value: '/tribute/natureOperation', key: '' },
  { label: 'Classificações fiscais', value: '/tribute/taxClassification', key: '' },
  { label: 'Tipos fiscais', value: '/tribute/typesFiscal', key: '' },
  { label: 'Relações tributárias', value: '/tribute/relations', key: '' },
  { label: 'Mensagens', value: '/tribute/messages', key: '' },

  { label: 'Home', value: '/dashboard', key: '' },
  { label: 'Status de atendimentos', value: '/sales/status', key: '' },
  { label: 'Contas à pagar', value: '/accounts/pay', key: 'Contas à pagar' },
  { label: 'Contas à receber', value: '/accounts/receive', key: 'Contas à receber' },
  { label: 'Lançamentos de caixa', value: '/entries/cash', key: 'Lançamentos de caixa' },
  { label: 'Lançamentos de banco', value: '/entries/bank', key: 'Lançamentos de banco' },
  { label: 'Informativo dia à dia', value: '/dailyUpdate', key: '' },
  { label: 'Recibos', value: '/receipt', key: '' },
  { label: 'Conciliação', value: '/conciliation', key: '' },
  { label: 'Comissões', value: '/commissions', key: '' },
  { label: 'Produtos', value: '/printLabels/products', key: '' },

  { label: 'Notas de entrada', value: '/docs/purchase', key: 'Notas de entrada' },
  { label: 'Importação de XML', value: '/docs/importXML', key: 'Importação XML' },
  { label: 'Ordem de compra', value: '/docs/purchaseOrder', key: 'Ordem de compra' },
  { label: 'Solicitação de compra', value: '/docs/purchaseRequest', key: 'Solicitação de compra' },
  { label: 'Monitor NF-e', value: '/docs/searchDFe', key: 'Monitor NF-e' },

  { label: 'Perfil', value: '/profile', key: '' },
  { label: 'Central de contatos', value: '/contacts', key: '' },
  { label: 'Central de ajuda', value: '/help', key: '' },
  { label: 'Usuários', value: '/person/users', key: '' },
  { label: 'Empresas', value: '/company', key: '' },
  { label: 'Cadastro', value: '/company/form', key: '' },

  { label: 'Parâmetros', value: '/parameters', key: '' },
  { label: 'Etiquetas', value: '/printLabels/settings', key: '' },
  { label: 'Liberar vendas', value: '/authorizeSales', key: '' },
  { label: 'Liberar pessoas', value: '/authorizePerson', key: '' },
  { label: 'Auditoria', value: '/audit', key: '' },
  { label: 'Usuários conectados', value: '/usersConnected', key: '' },

  { label: 'Emissão', value: '/docs/nfe/form', key: 'NF-e' },
  { label: 'Consulta NF-e', value: '/docs/nfe', key: 'NF-e' },
  { label: 'Inutilização', value: '/docs/disenable/nfe', key: '' },
  { label: 'Emissão', value: '/docs/salesOrder/form', key: 'Pedidos' },
  { label: 'Consulta', value: '/docs/salesOrder', key: 'Pedidos' },
  { label: 'Emissão', value: '/docs/serviceOrder/form', key: 'Ordens de serviço' },
  { label: 'Ordens de serviço', value: '/docs/serviceOrder', key: 'Ordens de serviço' },
  { label: 'Envio em lote NFS-e', value: '/docs/nfe/lotSend', key: 'Lote' },
  { label: 'Geração em lote NFS-e', value: '/docs/nfe/lotProduction', key: 'Lote' },

  { label: 'NFC-e', value: '/docs/nfce/form', key: 'NFC-e' },
  { label: 'Consulta NFC-e', value: '/docs/nfce', key: 'NFC-e' },
  { label: 'Inutilização', value: '/docs/disenable/nfce', key: '' },
  { label: 'Emissão orçamentos', value: '/docs/salesProposal/form', key: 'Orçamentos' },
  { label: 'Consulta orçamentos', value: '/docs/salesProposal', key: 'Orçamentos' },
  { label: 'Emissão MDF-e', value: '/docs/mdfe/form', key: 'MDF-e' },
  { label: 'Consulta MDF-e', value: '/docs/mdfe', key: 'MDF-e' },
  { label: 'Cadastrar consignações', value: '/docs/consigned/form', key: '' },
  { label: 'Consignações', value: '/docs/consigned', key: '' },
  { label: 'Fechamentos de caixa', value: '/docs/nfce/boxClose', key: '' },
  { label: 'Emissão CT-e', value: '/docs/cte/form', key: 'CT-e' },
  { label: 'Consulta CT-e', value: '/docs/cte', key: 'CT-e' },

  { label: 'Notificações', value: '/notifications', key: '' },
  { label: 'Importações', value: '/imports/products', key: '' },
]
