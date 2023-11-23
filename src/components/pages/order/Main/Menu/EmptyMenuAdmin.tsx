type EmptyMenuAdminProps = {
    onReset: () => {}
}

export default function EmptyMenuAdmin({ onReset }: EmptyMenuAdminProps) {
  return (
      <div>
        <span>Pas de produit</span>
        <button onClick={ onReset }>Reset</button>
      </div>
  )
}
