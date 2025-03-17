import groq from 'groq'

type Props = {
  type: string
  filterValue?: string
}
const constructFilter = (props: Props): string => {
  let defaultFilter = `
    _type == "${props.type}"
  `
  if (props.filterValue) {
    defaultFilter += `&& title match "*${props.filterValue}*" || prompt match "*${props.filterValue}*"`
  }

  return groq`${defaultFilter}`
}

export default constructFilter
