const Header = ()=>{
   return(
      <nav class="flex items-center justify-center flex-wrap bg-teal p-6 dark:bg-gray-800  ">
         <div class="flex items-center flex-no-shrink text-gray-700 mr-6 content-center">
            <span class="font-semibold tracking-tight text-3xl dark:text-gray-300" >Cyber-Security</span>
         </div>
         {/* <div class="block lg:hidden">
            <button class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
               <svg class="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
         </div> */}
         </nav>
   )
}

export default Header;