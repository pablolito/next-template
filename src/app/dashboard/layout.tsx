export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <header className='bg-black text-white mb-3'>
        Dashboard nav
      </header>
      <main>{children}</main>
    </div>
  )
}
