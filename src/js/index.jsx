import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'


/* createRoot -- для создания корня React для отображения контента внутри элемента DOM браузера.
   DOM соединяет веб-страницу с языками описания сценариев либо языками программирования. */
createRoot(document.getElementById('root')).render(
	/* StrictMode - инструмент для выявления потенциальных проблем в приложении.
	   StrictMode помогает с:
		Выявление компонентов с небезопасным жизненным циклом
		Предупреждение об использовании устаревшего API-интерфейса String Ref
		Предупреждение об устаревшем использовании findDOMNode
		Обнаружение неожиданных побочных эффектов
		Обнаружение устаревшего контекстного API
		Обеспечение возможности повторного использования */
	<StrictMode>
		{/* BrowserRouter -- сохраняет текущее местоположение в адресной строке 
		    браузера, используя чистые URL-адреса, и осуществляет навигацию, 
			используя встроенный в браузер стек истории */}
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StrictMode>,
)
