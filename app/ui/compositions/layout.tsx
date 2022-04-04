import { Header } from './header'

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-8 py-12">{children}</main>
    </>
  )
}
