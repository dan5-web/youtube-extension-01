$(() => {
	const loading_time = 300
	setTimeout(() => {
		const $container = $('#shorts-container')
		const style_json = { // css情報を入れたJSON
			position: 'absolute',
			top: '30px',
			left: '30px',
			padding: '5px 10px',
			'border-radius': '8px',
			cursor: 'pointer',
			border: '1px solid dimgray',
			'background-color': 'gainsboro',
			color: 'black',
			'font-weight': 'bold',
			'font-size': '1.2rem'
		}
		const style = json_to_css(style_json) // jsonをcssに変換
		const contents = `<button type="button" id="short-off" style="${style}">通常の表示に戻す</button>`
		
		// append
		new Promise(resolve => {
			$container.append(contents)
			
			resolve()
		}).then(() => {
			let short_off = $('#short-off')
			
			// hoverイベント
			short_off.hover(() => {
				short_off.css('opacity', '0.7')
			}, () => {
				short_off.css('opacity', '1')
			})

			// clickイベント
			short_off.click(() => {
				const parameter = location.pathname
				const str_start = 8
				const str_end = parameter.length + 1
				const video_id = parameter.substring(str_start, str_end)
				const url = `https://www.youtube.com/watch?v=${video_id}`
				location.href = url
			})
		})
	}, loading_time)
})

// JSON配列からCSSを生成する関数
function json_to_css(styleJSON) {
	let css = ''
	for (style in styleJSON) {
		css += `${style}:${styleJSON[style]};`
	}

	return css
}