/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/admin/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
        colors: {
          'ff-white': '#FFFFFF',
          'c8-gray':'#C8C8C8',
          'fb-white':'#FBFBFB',
          'd3-white':'#D3D3D3',
          '33-black':'#333333',
          '76-gray':'#767F87',
          'b1-gray':'#B1B1B1',
          'btn-green':'#138A8A',
          'btn-29-navi':'#294B6D',
          '55-gray':'#555555',
          'f2-blue':'#F2FAFF',
          'c9-white':'#C9C9C9',
          'fa-gray':' #FAFAFA',
          '6d-brown':'#6D4B29',
          'db-gray':'#DBDBDB',
          '75-gray':'#757575',
          '25-black':'#253647',
          'f3-purple':'#F3F3FF',
          'table-blue':'#EFFBFF',
          '64-gray':'#646464'
        },
        spacing: {
          '5.5': '22px',
          '9.5':'38px',
          'input-wh':'418px',
          '82':'350px',
          '13':'51px',
          '0.5':'2px',
          '2.5':'10px',
          
          '26':'100px',
          '3.5':'14px',
          '3.8':'15px',
          '1.25':'5px',
          '4.5':'17px',
          '2.3':'9px',
          '5.7':'23px',
          '17':'72px',
          '6.2':'25px',
          '68':'282px',
          '38':'154px',
          '46':'181px'
        },
        borderRadius: {
         'mmd':'5px'
        },
  },
  plugins: [],
}
}