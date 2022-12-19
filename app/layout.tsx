export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className='min-w-[640]'>
        {children}
      </body>
    </html>
  )
}
