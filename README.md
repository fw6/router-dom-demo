### API

#### <Memory />

- initialEntries: Array
- initialIndex: Number
- getUserConfirmation: Func
- keyLength: Number
- child: Node

#### <Prompt />

- message: String | Func
- when: Bool

#### <Redirect />

- to: String | Object
- push: Bool
- from: String
- exact: Bool
  strict: Bool

#### <Route />

- component
- render: Func
- children: Func
- path: String | string[]
- exact: Bool
- strict: Bool
- location: Object
- sensitive: Bool

#### <Router />

- <BrowserRouter />
- <HashRouter />
- <MemoryRouter />
- <NativeRouter />
- <StaticRouter />

#### <Switch />

- location: Object
- chindren: Node
