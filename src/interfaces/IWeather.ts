export interface IWeather{
        weather: {
            id: number;
            main: string;
            description: string;
            icon: string;
        }[],
        main: {
            temp: number;
            feels_like: number;
            pressure: number;
            humidity: number;
            temp_min?: number;
            temp_max?: number;
        };
        visibility: number,
        wind: {
            speed: number,
            deg: number,
            gust: number,
        },
        clouds: {
            all: number
        },
        sys: {
            country: string,
            sunrise: number,
            sunset: number,
        },
        name: string,
    
}