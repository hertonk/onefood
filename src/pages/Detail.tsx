import cozidao from '../assets/cozidao.png';

export default function Detail(){
    return (
        <div>
            <div className="bg-white-screen">
                
            <div>
                <div className="bg-white w-full md:max-w-800 mx-auto p-2 flex flex-row border-b border-gray-200">
                    <a href="/">
                        <svg className="w-6 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/>
                        </svg>
                    </a>
                    <h1 className="flex-1 text-center">Detalhe do produto</h1>
                </div>
                <div className="bg-white w-full md:max-w-800 mx-auto p-4 ">
                    <img src={cozidao} className='w-full rounded-md' />
                </div>
                <div className="bg-white w-full md:max-w-800 mx-auto p-4 flex flex-col my-2">
                    <h1 className='text-xl font-bold'>Cozidão</h1>
                    <p className='text-gray-400 mt-2'>Carne saborosa cozida com legumes, temperos frescos, servido com caldo. (Feijão acompanha se solicitado)</p>
                    <p className='mt-2 text-lg font-bold'>A partir de R$ 13,00</p>  
                </div>
            </div>
            </div>
        
        
        <div className='bg-cinza'>
            <div className='w-full md:max-w-800 mx-auto flex flex-col p-5 pb-20 items-center justify-center'>
                <div className='flex flex-row justify-between items-center w-full mb-3'>
                    <p className='font-bold'>Escolha 1 opção</p>
                    <p className='text-white bg-gray-400 rounded-full px-3 py-2 text-xs'>Obrigatório</p>
                </div>
                <div className='flex flex-row justify-between items-center w-full mb-2 border-b border-gray-200 py-3'>
                    <p>PF (tamanho médio)</p>
                    <p>R$ 13,00</p>
                </div>
                <div className='flex flex-row justify-between items-center w-full mb-2 border-b border-gray-200 py-3'>
                    <p>Refeição (tamanho grande)</p>
                    <p>R$ 18,00</p>
                </div>
            </div>
             <div className='w-full md:max-w-800 mx-auto flex flex-row p-5 pb-20 items-center justify-center'>
                <span className='text-xs text-gray-400 mr-1'>Uma experiência</span>
                <span className='text-gray-400 font-bold'>OneFood</span>
            </div>
        </div>
        </div>
    );
}