
export function ButtonListFunction({children,onSelect}) {
    //To check excution of the react app
    console.log('======================>Button List Intailized');
  return(
    <li><button onClick={onSelect}>{children}</button></li>
  )
}