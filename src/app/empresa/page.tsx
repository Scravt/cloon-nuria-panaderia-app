import React from 'react'

export default function page () {
  return (
    <div>
        <main className="flex flex-col row-start-2 items-center sm:items-start">
        <img
          className="w-full h-[755px]"
          src="/images/nuria-primer-local(1).jpg"
          alt="Next.js logo"
        />
        <div className="w-full h-[400px] flex items-center justify-center bg-white text-black">
          <article className="flex flex-col max-w-3xl gap-2  " >
            <p>
              En 1936 Don Enrique Adel, confitero catalán trajo a la Argentina su oficio y las nostalgias de su Nuria
              natal en los Pirineos españoles y fundó Confitería Nuria.
            </p>
            <p>
              En 1955 es comprada por sus actuales dueños que sin cambiar su fisonomía original le dieron una
              evolución que la posicionó en los primeros puestos del mercado rosarino en su rubro.
            </p>
            <p>

              Basado en el prestigio adquirido con los años, y traspaso generacional mediante, en 1992 inició un
              proceso de expansión que la llevó de tener un único local de ventas con fábrica propia a alcanzar en la
              actualidad ocho locales de venta y envío a domicilio en toda la ciudad.
            </p>
          </article>
        </div>
      </main>

    </div>
  )
}
