import logo from './assets/logo.png';
import cozidao from './assets/cozidao.png';
import waves from  './assets/new-waves.svg';

function App() {

  return (
    <div>
      <div className="bg-[url('./assets/bg.png')] bg-repeat-x bg-cinza">
        <div className='flex items-start justify-center py-3'>
          <svg className="goomer-logo" width="74" height="16" viewBox="0 0 74 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" className='text-black' clip-rule="evenodd" d="M8.09915 16L11.1665 15.1634C10.7823 13.1619 9.28892 11.9907 7.18203 11.9907H3.92874C3.37723 11.9907 2.98683 11.6871 2.98683 11.2161C2.98683 10.9063 3.14795 10.6212 3.45778 10.4167C3.95352 10.5593 4.46166 10.6212 4.99458 10.6212C7.82029 10.6212 9.94578 8.65685 9.94578 6.01704C9.94578 5.01317 9.64214 4.13323 9.12781 3.39582C9.22696 3.01162 9.61735 2.76375 10.1069 2.76375H10.8443V0H9.96437C8.53292 0 7.49187 0.712626 7.18203 1.84043C6.53137 1.57397 5.79396 1.41286 4.99458 1.41286C2.16886 1.41286 0.0619675 3.37723 0.0619675 6.01704C0.0619675 7.30596 0.570101 8.45236 1.43145 9.27033C0.55151 9.80325 0 10.8691 0 11.9721C0 13.7134 1.3323 14.8784 3.35244 14.8722H6.60573C7.44229 14.8722 8.01859 15.3246 8.09915 16ZM4.98838 7.79551C3.92874 7.79551 3.12936 7.0395 3.12936 6.01704C3.12936 4.99458 3.90395 4.23857 4.98838 4.23857C6.05422 4.23857 6.87219 4.99458 6.87219 6.01704C6.87219 7.0395 6.04802 7.79551 4.98838 7.79551ZM16.979 1.41932C13.7691 1.41932 11.3524 3.76789 11.3524 6.87866C11.3524 9.98942 13.7629 12.338 16.979 12.338C20.1889 12.338 22.6057 9.98942 22.6057 6.87866C22.6057 3.77409 20.1889 1.41932 16.979 1.41932ZM16.9728 4.30081C18.4476 4.30081 19.5321 5.40383 19.5321 6.87866C19.5321 8.35348 18.4476 9.4565 16.9728 9.4565C15.498 9.4565 14.4136 8.35348 14.4136 6.87866C14.4136 5.40383 15.498 4.30081 16.9728 4.30081ZM23.7459 6.87866C23.7459 3.76789 26.1626 1.41932 29.3725 1.41932C32.5825 1.41932 34.9992 3.77409 34.9992 6.87866C34.9992 9.98942 32.5825 12.338 29.3725 12.338C26.1564 12.338 23.7459 9.98942 23.7459 6.87866ZM31.9256 6.87866C31.9256 5.40383 30.8412 4.30081 29.3663 4.30081C27.8915 4.30081 26.8071 5.40383 26.8071 6.87866C26.8071 8.35348 27.8915 9.4565 29.3663 9.4565C30.8412 9.4565 31.9256 8.35348 31.9256 6.87866ZM53.2424 12.0963V5.28609C53.2424 2.94992 51.7242 1.41932 49.3695 1.41932C47.9194 1.41932 46.7297 1.97083 45.8931 3.03667C45.2362 2.01421 44.1146 1.41932 42.7018 1.41932C41.4934 1.41932 40.4895 1.8469 39.7335 2.66487V1.661H36.7467V12.0901H39.7335V6.2218C39.7335 5.0754 40.5329 4.30081 41.6793 4.30081C42.7823 4.30081 43.5012 5.05681 43.5012 6.18462V12.0901H46.488V6.2218C46.488 5.0754 47.2874 4.30081 48.4338 4.30081C49.5368 4.30081 50.2556 5.05681 50.2556 6.18462V12.0963H53.2424ZM65.7971 7.86338H58.0264C58.392 9.02837 59.3959 9.74719 60.7034 9.74719C61.887 9.74719 62.8289 9.19568 63.3246 8.58221L65.3262 10.3235C64.2231 11.569 62.5438 12.3498 60.6228 12.3498C57.3076 12.3498 54.8165 9.97647 54.8165 6.82853C54.8165 3.76114 57.2084 1.43116 60.3812 1.43116C63.5105 1.43116 65.8653 3.76114 65.8653 6.93387C65.8591 7.20653 65.8405 7.59692 65.7971 7.86338ZM58.0078 5.87423H62.6925C62.3641 4.70924 61.4656 3.99042 60.3378 3.99042C59.21 3.99661 58.3114 4.73403 58.0078 5.87423ZM73.8343 4.5673V1.49991V1.49371H73.3819C72.2541 1.49371 71.2936 1.98325 70.5562 2.8446V1.66102H67.5694V12.0963H70.5562V7.2257C70.5562 5.60835 71.5601 4.5673 73.3819 4.5673H73.8343Z"></path></svg>
        </div>
        <div>
          <div className="bg-white rounded-tl-xl rounded-tr-xl shadow-md w-full md:max-w-800 mx-auto p-4 ">
              <div className='flex flex-row'>
                <div>
                  <img src={logo} width={100} className='rounded-xl border border-gray-200 mr-3' />
                </div>
                <div className='flex flex-col justify-center'>
                  <h2 className='font-bold'>Restaurante e Delivery Gosto Caseiro</h2>
                  <p className='text-xs text-gray-400 flex flex-row items-center'> 
                  <svg stroke="currentColor" className='mr-1' fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="12px" width="12px" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M21 2v20h-2v-7h-4V8a6 6 0 0 1 6-6zm-2 2.53C18.17 5 17 6.17 17 8v5h2V4.53zM9 13.9V22H7v-8.1A5.002 5.002 0 0 1 3 9V3h2v7h2V3h2v7h2V3h2v6a5.002 5.002 0 0 1-4 4.9z"></path></g></svg> Comida Caseira <span className='mx-2'>&bull;</span>   <a href="#" className='underline'>Ver mais</a></p>
                </div>
              </div>
              <div className='py-3'>
                <p className='text-xs text-red-500 flex flex-row items-center'>
                  <svg className="w-3 h-3 mr-1 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                  </svg>
                  Fechada</p>
              </div>
          </div>
          <div className="w-full md:max-w-800 mx-auto bg-[url('../public/new-waves.svg')] h-2 no-repat">
          </div>
          <div className='w-full md:max-w-800 mx-auto'>
              <h1 className='text-xl font-bold mt-5 mb-2 ml-2'>Pratos Prontos</h1>

              <div className='bg-white border-b-2 border-gray-200'>
                <div className='flex p-4 justify-between'>
                  <div>
                    <p className='text-black text-xs font-bold'>Cozidão</p>
                    <p className='text-gray-400 text-xs mt-2'>Carne saborosa cozida com legumes, temperos frescos, servido com caldo. (Feijão acompanha se solicitado)</p>
                    <p className='mt-2 text-xs'>A partir de <span className='font-bold text-sm'>R$ 13,00</span></p>
                  </div>
                  <div className='flex items-center justify-center'>
                    <img src={cozidao} className='rounded-lg aspect-square' width='84' alt='' />
                  </div>
                </div>
              </div>

              <div className='bg-white border-b-2 border-gray-200'>
                <div className='flex p-4 justify-between'>
                  <div>
                    <p className='text-black text-xs font-bold'>Cozidão</p>
                    <p className='text-gray-400 text-xs mt-2'>Carne saborosa cozida com legumes, temperos frescos, servido com caldo. (Feijão acompanha se solicitado)</p>
                    <p className='mt-2 text-xs'>A partir de <span className='font-bold text-sm'>R$ 13,00</span></p>
                  </div>
                  <div className='flex items-center justify-center'>
                    <img src={cozidao} className='rounded-lg aspect-square' width='84' alt='' />
                  </div>
                </div>
              </div>
              <div className='bg-white border-b-2 border-gray-200'>
                <div className='flex p-4 justify-between'>
                  <div>
                    <p className='text-black text-xs font-bold'>Cozidão</p>
                    <p className='text-gray-400 text-xs mt-2'>Carne saborosa cozida com legumes, temperos frescos, servido com caldo. (Feijão acompanha se solicitado)</p>
                    <p className='mt-2 text-xs'>A partir de <span className='font-bold text-sm'>R$ 13,00</span></p>
                  </div>
                  <div className='flex items-center justify-center'>
                    <img src={cozidao} className='rounded-lg aspect-square' width='84' alt='' />
                  </div>
                </div>
              </div>
              <div className='bg-white border-b-2 border-gray-200'>
                <div className='flex p-4 justify-between'>
                  <div>
                    <p className='text-black text-xs font-bold'>Cozidão</p>
                    <p className='text-gray-400 text-xs mt-2'>Carne saborosa cozida com legumes, temperos frescos, servido com caldo. (Feijão acompanha se solicitado)</p>
                    <p className='mt-2 text-xs'>A partir de <span className='font-bold text-sm'>R$ 13,00</span></p>
                  </div>
                  <div className='flex items-center justify-center'>
                    <img src={cozidao} className='rounded-lg aspect-square' width='84' alt='' />
                  </div>
                </div>
              </div>
              
              
          </div>
        </div>
        <div className='w-full md:max-w-800 mx-auto flex flex-row p-5 pb-20 items-center justify-center'>
            <span className='text-xs text-gray-400 mr-1'>Uma experiência</span>
            <svg width="74" height="16" viewBox="0 0 74 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.09915 16L11.1665 15.1634C10.7823 13.1619 9.28892 11.9907 7.18203 11.9907H3.92874C3.37723 11.9907 2.98683 11.6871 2.98683 11.2161C2.98683 10.9063 3.14795 10.6212 3.45778 10.4167C3.95352 10.5593 4.46166 10.6212 4.99458 10.6212C7.82029 10.6212 9.94578 8.65685 9.94578 6.01704C9.94578 5.01317 9.64214 4.13323 9.12781 3.39582C9.22696 3.01162 9.61735 2.76375 10.1069 2.76375H10.8443V0H9.96437C8.53292 0 7.49187 0.712626 7.18203 1.84043C6.53137 1.57397 5.79396 1.41286 4.99458 1.41286C2.16886 1.41286 0.0619675 3.37723 0.0619675 6.01704C0.0619675 7.30596 0.570101 8.45236 1.43145 9.27033C0.55151 9.80325 0 10.8691 0 11.9721C0 13.7134 1.3323 14.8784 3.35244 14.8722H6.60573C7.44229 14.8722 8.01859 15.3246 8.09915 16ZM4.98838 7.79551C3.92874 7.79551 3.12936 7.0395 3.12936 6.01704C3.12936 4.99458 3.90395 4.23857 4.98838 4.23857C6.05422 4.23857 6.87219 4.99458 6.87219 6.01704C6.87219 7.0395 6.04802 7.79551 4.98838 7.79551ZM16.979 1.41932C13.7691 1.41932 11.3524 3.76789 11.3524 6.87866C11.3524 9.98942 13.7629 12.338 16.979 12.338C20.1889 12.338 22.6057 9.98942 22.6057 6.87866C22.6057 3.77409 20.1889 1.41932 16.979 1.41932ZM16.9728 4.30081C18.4476 4.30081 19.5321 5.40383 19.5321 6.87866C19.5321 8.35348 18.4476 9.4565 16.9728 9.4565C15.498 9.4565 14.4136 8.35348 14.4136 6.87866C14.4136 5.40383 15.498 4.30081 16.9728 4.30081ZM23.7459 6.87866C23.7459 3.76789 26.1626 1.41932 29.3725 1.41932C32.5825 1.41932 34.9992 3.77409 34.9992 6.87866C34.9992 9.98942 32.5825 12.338 29.3725 12.338C26.1564 12.338 23.7459 9.98942 23.7459 6.87866ZM31.9256 6.87866C31.9256 5.40383 30.8412 4.30081 29.3663 4.30081C27.8915 4.30081 26.8071 5.40383 26.8071 6.87866C26.8071 8.35348 27.8915 9.4565 29.3663 9.4565C30.8412 9.4565 31.9256 8.35348 31.9256 6.87866ZM53.2424 12.0963V5.28609C53.2424 2.94992 51.7242 1.41932 49.3695 1.41932C47.9194 1.41932 46.7297 1.97083 45.8931 3.03667C45.2362 2.01421 44.1146 1.41932 42.7018 1.41932C41.4934 1.41932 40.4895 1.8469 39.7335 2.66487V1.661H36.7467V12.0901H39.7335V6.2218C39.7335 5.0754 40.5329 4.30081 41.6793 4.30081C42.7823 4.30081 43.5012 5.05681 43.5012 6.18462V12.0901H46.488V6.2218C46.488 5.0754 47.2874 4.30081 48.4338 4.30081C49.5368 4.30081 50.2556 5.05681 50.2556 6.18462V12.0963H53.2424ZM65.7971 7.86338H58.0264C58.392 9.02837 59.3959 9.74719 60.7034 9.74719C61.887 9.74719 62.8289 9.19568 63.3246 8.58221L65.3262 10.3235C64.2231 11.569 62.5438 12.3498 60.6228 12.3498C57.3076 12.3498 54.8165 9.97647 54.8165 6.82853C54.8165 3.76114 57.2084 1.43116 60.3812 1.43116C63.5105 1.43116 65.8653 3.76114 65.8653 6.93387C65.8591 7.20653 65.8405 7.59692 65.7971 7.86338ZM58.0078 5.87423H62.6925C62.3641 4.70924 61.4656 3.99042 60.3378 3.99042C59.21 3.99661 58.3114 4.73403 58.0078 5.87423ZM73.8343 4.5673V1.49991V1.49371H73.3819C72.2541 1.49371 71.2936 1.98325 70.5562 2.8446V1.66102H67.5694V12.0963H70.5562V7.2257C70.5562 5.60835 71.5601 4.5673 73.3819 4.5673H73.8343Z" fill="#999999"></path></svg>
        </div>
      </div>
      

      <div className='relative md:max-w-800 mx-auto'>
        <div className="fixed bottom-0 mx-auto z-50 w-full md:max-w-800 h-16 bg-white border-t border-gray-200">
            <div className="grid h-full max-w-lg grid-cols-1 mx-auto font-medium">
                <button type="button" className="inline-flex flex-col items-center justify-center px-5 group">
                  <svg className="w-4 h-4 text-vinho" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M11 4.7C8.7 4.1 6.8 4 4 4a2 2 0 0 0-2 2v11c0 1.1 1 2 2 2 2.8 0 4.5.2 7 .8v-15Zm2 15.1c2.5-.6 4.2-.8 7-.8a2 2 0 0 0 2-2V6c0-1-.9-2-2-2-2.8 0-4.7.1-7 .7v15.1Z" clip-rule="evenodd"/>
                  </svg>
                  <span className="text-sm text-vinho">Cardápio</span>
                </button>
               
            </div>
        </div>
      </div>
  </div>

  )
}

export default App
