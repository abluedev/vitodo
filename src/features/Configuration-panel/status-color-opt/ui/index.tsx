import {useContext} from "react";
import {ColorContext} from "../../../../components/provider/color.context.tsx";

const availableColors = [
    {id: 'text-rose-600', rgb: 'rgb(225 29 72)'},
    {id: 'text-pink-600', rgb: 'rgb(219 39 119)'},
    {id: 'text-fuchsia-600', rgb: 'rgb(192 38 211)'},
    { id: 'text-indigo-600', rgb: 'rgb(79 70 229)'}
]

export const StatusColor = () => {

    const { setColor } = useContext(ColorContext);

    const DEFAULT_COLOR = {id: 'text-violet-600', rgb: 'rgb(124 58 237)'};

    const handleChangeColor = (color: { id: string, rgb: string }) => {
        localStorage.setItem('color', JSON.stringify(color));
        setColor && setColor(color.rgb)
    }

    return <div className="flex flex-col">
            <ul className="flex flex-wrap gap-2">
                <li className="w-full flex gap-2">
                    <button onClick={() => handleChangeColor(DEFAULT_COLOR)}>
                        <p className="p-2 rounded-sm min-w-16 min-h-10 text-white" style={{background: DEFAULT_COLOR.rgb}}> Default color </p>
                    </button>

                {availableColors.map(color =>
                    <button onClick={() => handleChangeColor(color)}>
                    <p className="p-2 rounded-sm min-w-16 min-h-10" style={{ background: color.rgb}}></p>
                </button>)}
                </li>
            </ul>
    </div>
}
