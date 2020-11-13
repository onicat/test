# Задание

## Приложение на Node.js и Typescript

- Код приложения должен быть на TS 3.9+ (Node.js 10.15+)
- Приложение должно читать `files.json` и создавать исходные файлы указанные в конфиге.

    ```json
        //Note: все пути относительны `files.json`
        {
            "destination": "", // out folder для webpack bundle, относительный путь
            "bundleName": "", // имя webpack bundle
            "files": [
                {
                    "file": "", // относительный путь и имя файла
                    "content": "", // контент файла
                    "entry": true // опционально, указывает на то что это entry point для Webpack конфига  
                }
            ]
        }
    ```

## Webpack bundle

Из сгенеренных .ts файлов нужно создать webpack JS bundle

- Создать `webpack.config.js` который будет генерировать js bundle, используя настройки из files.json.

## Билд таски

- Создать `gulp` таски:
  - `gulp clean` - удалить сгенерированные файлы и бандл
  - `gulp build` - для запуска приложения и генерации `.ts` файлов 
  - `gulp bundle` - запуск webpack и генерация `.js` bundle
  - `gulp run` - запускает все предыдущие таски

- Добавить `npm build` script который будет делать то же что и `gulp run` таск

- Добавить PowerShell скрипт который будет удалять `node_modules` и делать `npm install`
