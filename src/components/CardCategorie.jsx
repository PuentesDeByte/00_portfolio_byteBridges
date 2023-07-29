
const CardCategorie = ({ skill, isFullList }) => {
  const fullListStyles = 'text-sm sm:text-base px-4 py-2'
  const smallListStyles = ''
  return (
    <span
      className={`card-categorie gl-txt-highlight h-full border-transparent rounded-3xl ${isFullList ? fullListStyles : smallListStyles}`}
    >
      {skill.name[0].toUpperCase() + skill.name.substring(1)}
    </span>
  )
}

export default CardCategorie
