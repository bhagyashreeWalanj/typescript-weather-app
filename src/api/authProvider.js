export const authProvider = {
    "BASE_URL": 'http://api.weatherapi.com/v1',
    "API_KEY": "017000392906439aae0110920223105"
}

//https://api.openweathermap.org/data/2.5/forecast?q=berlin&appid=a54b92c2f23341e4db393f6badcf3d0c
export const baseAuth = {
    "BASE_URL": 'https://api.openweathermap.org/data/2.5',
    "API_KEY": "a54b92c2f23341e4db393f6badcf3d0c"
}

export const dateConvert = (datetime) => {
    var date = new Date(datetime * 1000)
    var hours = date.getHours()
    var minutes = '0' + date.getMinutes()
    var seconds = '0' + date.getSeconds()

    var formattedTime =
        hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2)
    return formattedTime
}