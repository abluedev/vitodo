import {FaGear} from "react-icons/fa6";
import {Modal} from "../../../components/modal/modal.tsx";
import {ReactNode, useContext, useState} from "react";
import {ModalContext} from "../../../components/provider/modal.context.tsx";
import {StatusColor} from "../status-color-opt/ui";

export type ConfigurationListPanel = 'DEFAULT' | 'STATUS_COLOR';

const configurationOptions: [{ label: string, id: ConfigurationListPanel}] = [
    { label: 'Status color', id: 'STATUS_COLOR'},
]

export const ConfigurationPanelComponent = () => {

    const { setShow, setModal, modal } = useContext(ModalContext)
    const [configurationOption, setConfigurationOption ] = useState<ConfigurationListPanel>('DEFAULT');


    const handleOption = (optionId: ConfigurationListPanel) => {
        setConfigurationOption(optionId);
    }

    return (
        <div className="ml-auto">
            <FaGear onClick={() => {
                setShow && setShow(true);
                setModal && setModal("CONFIGURATION")
            }}/>
            { modal === "CONFIGURATION" && <Modal>
                <div className="grid grid-cols-12 bg-white p-4 rounded-sm">
                    <p className="text-xl col-span-full"> Panel Configuration </p>
                    <ul className="col-span-4">
                        { configurationOptions.map(option => <li className="border-violet-200 p-4">
                            <button onClick={() => handleOption(option.id)}> {option.label}</button>
                        </li>)}

                    </ul>
                    <div className="col-span-6">
                        { new Map<ConfigurationListPanel, ReactNode>([
                            ['DEFAULT', <div> Select an option </div>],
                            ['STATUS_COLOR', <StatusColor />]
                        ])?.get(configurationOption)}
                    </div>
                </div>
            </Modal>}
        </div>
    )
}
