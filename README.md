
`font-downloader` - bu Google Fonts shriftlarini yuklash va  undan foydalanish uchun CSS stylesheet generatsiya qilib beradigan CLI tool hisoblanadi

# O'rnatish

Siz ushbu paketni `npm` yordamida  o'rnatishingiz mumkin:

```sh
npm install  font-downloader

```
 `pnpm` orqali:

```sh
pnpm add font-downloader

```

`yarn ` orqali:

```sh
yarn add font-downloader
```

# Foydalanish

### Fontlarni yuklab olish

Quyidagi buyruq yordamida yuklab olish mumkin:
```sh
font-downloader <fontName>
```

Misol uchun, `Roboto` fontini yuklab va uning CSS stylesheetsini generatsiya qilishni ko'rib o'tamiz

```sh
font-downloader Roboto
```
Bu buyruq  `Roboto` font fayllarini yuklab olib, uning CSS stylesheetsini generatsiya qiladi


### Ko'rinish
 Yuklab olingan font fayllari quyidagi strukturada saqlanadi:

 ```sh
/src/assets/fonts/<font-name>/
    - <font-name>-Regular.ttf
    - <font-name>-Bold.ttf
    - <font-name>.css
 ```

 Yaratilgan CSS fayli loyihangizga shriftni kiritish uchun @font-face qoidalarini o'z ichiga oladi.

 ### CSS dan foydalnish 

 ```css
@import url('./src/assets/fonts/roboto/roboto.css');

body {
    font-family: 'Roboto', sans-serif;
}
 ```


# Contribute qilish

Ushbu loyihaga hissa qo‘shish uchun `pull request` so‘rovini yuboring yoki `issue` oching


# Litsenziya

<span style="color : #2964AA">MIT</span>
