# Vue Tailwind Modal

Vue компонент для создания модальных окон, использующий [Tailwind CSS](https://tailwindcss.com).

<img width="1439" alt="Снимок экрана 2021-02-07 в 17 02 42" src="https://user-images.githubusercontent.com/18230071/107148930-f1d85780-6966-11eb-8967-33df0d70b2c3.png">

## Установка проекта

```
npm install --save @ocrv/vue-tailwind-modal
```

## Использование

### Глобальная установка

В вашем main js файле:

```js
import VueTailwindModal from "@ocrv/vue-tailwind-modal"
Vue.component("VueTailwindModal", VueTailwindModal)
```

### Внутри компонента

В вашем компоненте (.vue файл):

```js
import VueTailwindModal from '@ocrv/vue-tailwind-modal'

export default {
  components: {
	VueTailwindModal,
	...
  },
  ...
```

После установки, используйте как и любой другой компонент:

```html
<vue-tailwind-modal
  :showing="true"
  :showClose="true"
  @update:showing="showing = $event"
  @close="afterClose()"
>
<!-- Вставьте здесь содержимое вашего модального окна -->
</vue-tailwind-modal>
```

Для показа и скрытия модального окна достаточно передать соответствующие логические true или false в :showing аттрибут.  
По-умолчанию, компонент будет отображать кнопку закрытия модального окна в правом верхнем углу экрана.  
Убрать кнопку можно передав логическое false в :showClose аттрибут.  

Закрытие модального окна стандартной кнопкой (при :showClose="true") генерирует 2 события:
- update:showing событие со значением false.
- событие close

Вы можете обрабатывать оба этих события, как в примере выше.
