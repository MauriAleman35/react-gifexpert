

export const CargarLoading = ({propLoading}) => {
  return (
    <>
        {
            propLoading ? <h2>Cargando...</h2> : null
        }
    </>
  )
}


