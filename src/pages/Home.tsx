import AnchorDetect from "react-anchor-scroll-detect";
import { Link } from 'react-router-dom';

import logo from '../assets/logo.png';
import cozidao from '../assets/cozidao.png';

export default function Home() {

  return (
    <div>
      <div className="bg-[url('./assets/bg.png')] bg-repeat-x bg-cinza">
        <div className='flex items-start justify-center py-3'>
          <span className='text-white font-bold'>OneFood</span>
        </div>
        <div>
          <div className="bg-white rounded-tl-xl rounded-tr-xl shadow-md w-full md:max-w-800 mx-auto p-4 ">
              <div className='flex flex-row'>
                <div className="mr-3">
                  <img src={logo} width={100} className='rounded-xl border border-gray-200 mr-3' />
                </div>
                <div className='flex flex-col justify-center'>
                  <h2 className='font-bold'>Restaurante e Delivery Gosto Caseiro</h2>
                  <p className='text-xs text-gray-400 flex flex-row items-center'> 
                  <svg stroke="currentColor" className='mr-1' fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="12px" width="12px" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M21 2v20h-2v-7h-4V8a6 6 0 0 1 6-6zm-2 2.53C18.17 5 17 6.17 17 8v5h2V4.53zM9 13.9V22H7v-8.1A5.002 5.002 0 0 1 3 9V3h2v7h2V3h2v7h2V3h2v6a5.002 5.002 0 0 1-4 4.9z"></path></g></svg> Comida Caseira <span className='mx-2'>&bull;</span>   <a href="about/" className='underline'>Ver mais</a></p>
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
          <div className="w-full md:max-w-800 mx-auto bg-[url('../public/new-waves.svg')] h-2 mb-2 no-repat">
          </div>
          <div className='bg-cinza sticky top-0 py-4'> 
          <div className='flex flex-row w-full md:max-w-800 mx-auto items-center justify-center px-7 md:p-0'>
            <Link to="/search" className='bg-white rounded-lg p-3 shadow-md'>
              <svg className="w-4 h-4 text-vinho" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
              </svg>
            </Link>
            <div className='w-full'>
                <AnchorDetect
                  className="text-black flex flex-row overflow-x-scroll container-snap ml-2"
                  items={[
                    "section-1",
                    "section-2",
                    "section-3",
                    "section-4",
                  ]}
                  activeClass="bg-vinho text-white order-first"
                  offsetTop={83}
                >
                  <div className="menu-item section-1 text-vinho border border-vinho rounded-md px-3 py-2 text-sm mx-1 text-nowrap cursor-pointer">Pratos Prontos</div>
                  <div className="menu-item section-2 text-vinho border border-vinho rounded-md px-3 py-2 text-sm mx-1 text-nowrap cursor-pointer">Feitos na Hora</div>
                  <div className="menu-item section-3 text-vinho border border-vinho rounded-md px-3 py-2 text-sm mx-1 text-nowrap cursor-pointer">Bebidas (Sucos e Refrigerantes)</div>
                  <div className="menu-item section-4 text-vinho border border-vinho rounded-md px-3 py-2 text-sm mx-1 text-nowrap cursor-pointer">Sobremesas</div>
                </AnchorDetect>
            </div>
          </div>
          </div>
          <div id='section-1' className='w-full md:max-w-800 mx-auto'>
    
              <h1 className='text-xl font-bold mt-3 mb-2 ml-2'>Pratos Prontos</h1>

              <Link to='/detail'>
                <div className='flex flex-col p-4 bg-white border-b-2 border-gray-200 hover:bg-stone-100 group'>
                  <p className='text-black text-xs font-bold mb-3'>Cozidão</p>
                  <div className="flex flex-row">
                    <div className='flex items-center justify-center mr-4'>
                      <img src={cozidao} className='rounded-lg aspect-square' width='94' alt='' />
                    </div>
                    <div className="flex-1">
                      <p className='text-gray-400 text-xs'>Carne saborosa cozida com legumes, temperos frescos, servido com caldo. (Feijão acompanha se solicitado)</p>
                      <p className='mt-2 text-xs'>A partir de <span className='font-bold text-sm'>R$ 13,00</span></p>
                    </div>
                  </div>
                </div>
              </Link>
              
              <Link to='/detail'>
                <div className='flex flex-col p-4 bg-white border-b-2 border-gray-200 hover:bg-stone-100 group'>
                  <p className='text-black text-xs font-bold mb-3'>Cozidão</p>
                  <div className="flex flex-row">
                    <div className='flex items-center justify-center mr-4'>
                      <img src={cozidao} className='rounded-lg aspect-square' width='94' alt='' />
                    </div>
                    <div className="flex-1">
                      <p className='text-gray-400 text-xs'>Carne saborosa cozida com legumes, temperos frescos, servido com caldo. (Feijão acompanha se solicitado)</p>
                      <p className='mt-2 text-xs'>A partir de <span className='font-bold text-sm'>R$ 13,00</span></p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link to='/detail'>
                <div className='flex flex-col p-4 bg-white border-b-2 border-gray-200 hover:bg-stone-100 group'>
                  <p className='text-black text-xs font-bold mb-3'>Cozidão</p>
                  <div className="flex flex-row">
                    <div className='flex items-center justify-center mr-4'>
                      <img src={cozidao} className='rounded-lg aspect-square' width='94' alt='' />
                    </div>
                    <div className="flex-1">
                      <p className='text-gray-400 text-xs'>Carne saborosa cozida com legumes, temperos frescos, servido com caldo. (Feijão acompanha se solicitado)</p>
                      <p className='mt-2 text-xs'>A partir de <span className='font-bold text-sm'>R$ 13,00</span></p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link to='/detail'>
                <div className='flex flex-col p-4 bg-white border-b-2 border-gray-200 hover:bg-stone-100 group'>
                  <p className='text-black text-xs font-bold mb-3'>Cozidão</p>
                  <div className="flex flex-row">
                    <div className='flex items-center justify-center mr-4'>
                      <img src={cozidao} className='rounded-lg aspect-square' width='94' alt='' />
                    </div>
                    <div className="flex-1">
                      <p className='text-gray-400 text-xs'>Carne saborosa cozida com legumes, temperos frescos, servido com caldo. (Feijão acompanha se solicitado)</p>
                      <p className='mt-2 text-xs'>A partir de <span className='font-bold text-sm'>R$ 13,00</span></p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link to='/detail'>
                <div className='flex flex-col p-4 bg-white border-b-2 border-gray-200 hover:bg-stone-100 group'>
                  <p className='text-black text-xs font-bold mb-3'>Cozidão</p>
                  <div className="flex flex-row">
                    <div className='flex items-center justify-center mr-4'>
                      <img src={cozidao} className='rounded-lg aspect-square' width='94' alt='' />
                    </div>
                    <div className="flex-1">
                      <p className='text-gray-400 text-xs'>Carne saborosa cozida com legumes, temperos frescos, servido com caldo. (Feijão acompanha se solicitado)</p>
                      <p className='mt-2 text-xs'>A partir de <span className='font-bold text-sm'>R$ 13,00</span></p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link to='/detail'>
                <div className='flex flex-col p-4 bg-white border-b-2 border-gray-200 hover:bg-stone-100 group'>
                  <p className='text-black text-xs font-bold mb-3'>Cozidão</p>
                  <div className="flex flex-row">
                    <div className='flex items-center justify-center mr-4'>
                      <img src={cozidao} className='rounded-lg aspect-square' width='94' alt='' />
                    </div>
                    <div className="flex-1">
                      <p className='text-gray-400 text-xs'>Carne saborosa cozida com legumes, temperos frescos, servido com caldo. (Feijão acompanha se solicitado)</p>
                      <p className='mt-2 text-xs'>A partir de <span className='font-bold text-sm'>R$ 13,00</span></p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link to='/detail'>
                <div className='flex flex-col p-4 bg-white border-b-2 border-gray-200 hover:bg-stone-100 group'>
                  <p className='text-black text-xs font-bold mb-3'>Cozidão</p>
                  <div className="flex flex-row">
                    <div className='flex items-center justify-center mr-4'>
                      <img src={cozidao} className='rounded-lg aspect-square' width='94' alt='' />
                    </div>
                    <div className="flex-1">
                      <p className='text-gray-400 text-xs'>Carne saborosa cozida com legumes, temperos frescos, servido com caldo. (Feijão acompanha se solicitado)</p>
                      <p className='mt-2 text-xs'>A partir de <span className='font-bold text-sm'>R$ 13,00</span></p>
                    </div>
                  </div>
                </div>
              </Link>
              
          </div>
          <div id='section-2' className='w-full md:max-w-800 mx-auto'>

            <h1 className='text-xl font-bold mt-3 mb-2 ml-2'>Feitos na Hora</h1>

            <Link to='/detail'>
              <div className='flex flex-col p-4 bg-white border-b-2 border-gray-200 hover:bg-stone-100 group'>
                <p className='text-black text-xs font-bold mb-3'>Cozidão</p>
                <div className="flex flex-row">
                  <div className='flex items-center justify-center mr-4'>
                    <img src={cozidao} className='rounded-lg aspect-square' width='94' alt='' />
                  </div>
                  <div className="flex-1">
                    <p className='text-gray-400 text-xs'>Carne saborosa cozida com legumes, temperos frescos, servido com caldo. (Feijão acompanha se solicitado)</p>
                    <p className='mt-2 text-xs'>A partir de <span className='font-bold text-sm'>R$ 13,00</span></p>
                  </div>
                </div>
              </div>
            </Link>

            <Link to='/detail'>
              <div className='flex flex-col p-4 bg-white border-b-2 border-gray-200 hover:bg-stone-100 group'>
                <p className='text-black text-xs font-bold mb-3'>Cozidão</p>
                <div className="flex flex-row">
                  <div className='flex items-center justify-center mr-4'>
                    <img src={cozidao} className='rounded-lg aspect-square' width='94' alt='' />
                  </div>
                  <div className="flex-1">
                    <p className='text-gray-400 text-xs'>Carne saborosa cozida com legumes, temperos frescos, servido com caldo. (Feijão acompanha se solicitado)</p>
                    <p className='mt-2 text-xs'>A partir de <span className='font-bold text-sm'>R$ 13,00</span></p>
                  </div>
                </div>
              </div>
            </Link>

            <Link to='/detail'>
              <div className='flex flex-col p-4 bg-white border-b-2 border-gray-200 hover:bg-stone-100 group'>
                <p className='text-black text-xs font-bold mb-3'>Cozidão</p>
                <div className="flex flex-row">
                  <div className='flex items-center justify-center mr-4'>
                    <img src={cozidao} className='rounded-lg aspect-square' width='94' alt='' />
                  </div>
                  <div className="flex-1">
                    <p className='text-gray-400 text-xs'>Carne saborosa cozida com legumes, temperos frescos, servido com caldo. (Feijão acompanha se solicitado)</p>
                    <p className='mt-2 text-xs'>A partir de <span className='font-bold text-sm'>R$ 13,00</span></p>
                  </div>
                </div>
              </div>
            </Link>

            <Link to='/detail'>
              <div className='flex flex-col p-4 bg-white border-b-2 border-gray-200 hover:bg-stone-100 group'>
                <p className='text-black text-xs font-bold mb-3'>Cozidão</p>
                <div className="flex flex-row">
                  <div className='flex items-center justify-center mr-4'>
                    <img src={cozidao} className='rounded-lg aspect-square' width='94' alt='' />
                  </div>
                  <div className="flex-1">
                    <p className='text-gray-400 text-xs'>Carne saborosa cozida com legumes, temperos frescos, servido com caldo. (Feijão acompanha se solicitado)</p>
                    <p className='mt-2 text-xs'>A partir de <span className='font-bold text-sm'>R$ 13,00</span></p>
                  </div>
                </div>
              </div>
            </Link>

            <Link to='/detail'>
              <div className='flex flex-col p-4 bg-white border-b-2 border-gray-200 hover:bg-stone-100 group'>
                <p className='text-black text-xs font-bold mb-3'>Cozidão</p>
                <div className="flex flex-row">
                  <div className='flex items-center justify-center mr-4'>
                    <img src={cozidao} className='rounded-lg aspect-square' width='94' alt='' />
                  </div>
                  <div className="flex-1">
                    <p className='text-gray-400 text-xs'>Carne saborosa cozida com legumes, temperos frescos, servido com caldo. (Feijão acompanha se solicitado)</p>
                    <p className='mt-2 text-xs'>A partir de <span className='font-bold text-sm'>R$ 13,00</span></p>
                  </div>
                </div>
              </div>
            </Link>

            <Link to='/detail'>
              <div className='flex flex-col p-4 bg-white border-b-2 border-gray-200 hover:bg-stone-100 group'>
                <p className='text-black text-xs font-bold mb-3'>Cozidão</p>
                <div className="flex flex-row">
                  <div className='flex items-center justify-center mr-4'>
                    <img src={cozidao} className='rounded-lg aspect-square' width='94' alt='' />
                  </div>
                  <div className="flex-1">
                    <p className='text-gray-400 text-xs'>Carne saborosa cozida com legumes, temperos frescos, servido com caldo. (Feijão acompanha se solicitado)</p>
                    <p className='mt-2 text-xs'>A partir de <span className='font-bold text-sm'>R$ 13,00</span></p>
                  </div>
                </div>
              </div>
            </Link>

            <Link to='/detail'>
              <div className='flex flex-col p-4 bg-white border-b-2 border-gray-200 hover:bg-stone-100 group'>
                <p className='text-black text-xs font-bold mb-3'>Cozidão</p>
                <div className="flex flex-row">
                  <div className='flex items-center justify-center mr-4'>
                    <img src={cozidao} className='rounded-lg aspect-square' width='94' alt='' />
                  </div>
                  <div className="flex-1">
                    <p className='text-gray-400 text-xs'>Carne saborosa cozida com legumes, temperos frescos, servido com caldo. (Feijão acompanha se solicitado)</p>
                    <p className='mt-2 text-xs'>A partir de <span className='font-bold text-sm'>R$ 13,00</span></p>
                  </div>
                </div>
              </div>
            </Link>
        </div>
        <div id='section-3' className='w-full md:max-w-800 mx-auto'>

            <h1 className='text-xl font-bold mt-3 mb-2 ml-2'>Bebidas (Sucos e Refrigerantes)</h1>
            
            <Link to='/detail'>
              <div className='flex flex-col p-4 bg-white border-b-2 border-gray-200 hover:bg-stone-100 group'>
                <p className='text-black text-xs font-bold mb-3'>Cozidão</p>
                <div className="flex flex-row">
                  <div className='flex items-center justify-center mr-4'>
                    <img src={cozidao} className='rounded-lg aspect-square' width='94' alt='' />
                  </div>
                  <div className="flex-1">
                    <p className='text-gray-400 text-xs'>Carne saborosa cozida com legumes, temperos frescos, servido com caldo. (Feijão acompanha se solicitado)</p>
                    <p className='mt-2 text-xs'>A partir de <span className='font-bold text-sm'>R$ 13,00</span></p>
                  </div>
                </div>
              </div>
            </Link>

            <Link to='/detail'>
              <div className='flex flex-col p-4 bg-white border-b-2 border-gray-200 hover:bg-stone-100 group'>
                <p className='text-black text-xs font-bold mb-3'>Cozidão</p>
                <div className="flex flex-row">
                  <div className='flex items-center justify-center mr-4'>
                    <img src={cozidao} className='rounded-lg aspect-square' width='94' alt='' />
                  </div>
                  <div className="flex-1">
                    <p className='text-gray-400 text-xs'>Carne saborosa cozida com legumes, temperos frescos, servido com caldo. (Feijão acompanha se solicitado)</p>
                    <p className='mt-2 text-xs'>A partir de <span className='font-bold text-sm'>R$ 13,00</span></p>
                  </div>
                </div>
              </div>
            </Link>

            <Link to='/detail'>
              <div className='flex flex-col p-4 bg-white border-b-2 border-gray-200 hover:bg-stone-100 group'>
                <p className='text-black text-xs font-bold mb-3'>Cozidão</p>
                <div className="flex flex-row">
                  <div className='flex items-center justify-center mr-4'>
                    <img src={cozidao} className='rounded-lg aspect-square' width='94' alt='' />
                  </div>
                  <div className="flex-1">
                    <p className='text-gray-400 text-xs'>Carne saborosa cozida com legumes, temperos frescos, servido com caldo. (Feijão acompanha se solicitado)</p>
                    <p className='mt-2 text-xs'>A partir de <span className='font-bold text-sm'>R$ 13,00</span></p>
                  </div>
                </div>
              </div>
            </Link>

            <Link to='/detail'>
              <div className='flex flex-col p-4 bg-white border-b-2 border-gray-200 hover:bg-stone-100 group'>
                <p className='text-black text-xs font-bold mb-3'>Cozidão</p>
                <div className="flex flex-row">
                  <div className='flex items-center justify-center mr-4'>
                    <img src={cozidao} className='rounded-lg aspect-square' width='94' alt='' />
                  </div>
                  <div className="flex-1">
                    <p className='text-gray-400 text-xs'>Carne saborosa cozida com legumes, temperos frescos, servido com caldo. (Feijão acompanha se solicitado)</p>
                    <p className='mt-2 text-xs'>A partir de <span className='font-bold text-sm'>R$ 13,00</span></p>
                  </div>
                </div>
              </div>
            </Link>

            <Link to='/detail'>
              <div className='flex flex-col p-4 bg-white border-b-2 border-gray-200 hover:bg-stone-100 group'>
                <p className='text-black text-xs font-bold mb-3'>Cozidão</p>
                <div className="flex flex-row">
                  <div className='flex items-center justify-center mr-4'>
                    <img src={cozidao} className='rounded-lg aspect-square' width='94' alt='' />
                  </div>
                  <div className="flex-1">
                    <p className='text-gray-400 text-xs'>Carne saborosa cozida com legumes, temperos frescos, servido com caldo. (Feijão acompanha se solicitado)</p>
                    <p className='mt-2 text-xs'>A partir de <span className='font-bold text-sm'>R$ 13,00</span></p>
                  </div>
                </div>
              </div>
            </Link>

            <Link to='/detail'>
              <div className='flex flex-col p-4 bg-white border-b-2 border-gray-200 hover:bg-stone-100 group'>
                <p className='text-black text-xs font-bold mb-3'>Cozidão</p>
                <div className="flex flex-row">
                  <div className='flex items-center justify-center mr-4'>
                    <img src={cozidao} className='rounded-lg aspect-square' width='94' alt='' />
                  </div>
                  <div className="flex-1">
                    <p className='text-gray-400 text-xs'>Carne saborosa cozida com legumes, temperos frescos, servido com caldo. (Feijão acompanha se solicitado)</p>
                    <p className='mt-2 text-xs'>A partir de <span className='font-bold text-sm'>R$ 13,00</span></p>
                  </div>
                </div>
              </div>
            </Link>

            <Link to='/detail'>
              <div className='flex flex-col p-4 bg-white border-b-2 border-gray-200 hover:bg-stone-100 group'>
                <p className='text-black text-xs font-bold mb-3'>Cozidão</p>
                <div className="flex flex-row">
                  <div className='flex items-center justify-center mr-4'>
                    <img src={cozidao} className='rounded-lg aspect-square' width='94' alt='' />
                  </div>
                  <div className="flex-1">
                    <p className='text-gray-400 text-xs'>Carne saborosa cozida com legumes, temperos frescos, servido com caldo. (Feijão acompanha se solicitado)</p>
                    <p className='mt-2 text-xs'>A partir de <span className='font-bold text-sm'>R$ 13,00</span></p>
                  </div>
                </div>
              </div>
            </Link>
        </div>

        <div id='section-4' className='w-full md:max-w-800 mx-auto'>

            <h1 className='text-xl font-bold mt-3 mb-2 ml-2'>Sobremesas</h1>

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
            <span className='text-gray-400 font-bold'>OneFood</span>
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
