export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html id="top" className="min-w-[640]">
      <head />
      <body className='min-w-[640]'>
        {children}
      </body>
    </html>
  )
}
