import EthereumLogo from "../../asset/image/chain/Ethereum.png";
import KlaytnLogo from "../../asset/image/chain/Klaytn.png";
import PolygonLogo from "../../asset/image/chain/Polygon.png";
import SolanaLogo from "../../asset/image/chain/Solana.png";
import AptosLogo from "../../asset/image/chain/Aptos.png";
import AuroraLogo from "../../asset/image/chain/Aurora.png";
import { ReactComponent as EthereumIcon } from "../../asset/svg/chain/ethereum.svg";
import { ReactComponent as KlaytnIcon } from "../../asset/svg/chain/klaytn.svg";
import { ReactComponent as PolygonIcon } from "../../asset/svg/chain/polygon.svg";
import { ReactComponent as SolanaIcon } from "../../asset/svg/chain/solana.svg";
import { ReactComponent as AptosIcon } from "../../asset/svg/chain/aptos.svg";
import { ReactComponent as AuroraIcon } from "../../asset/svg/chain/aurora.svg";

import ethereumCard from "../../asset/image/integratedNft/card/ethereum.png";
import polygonCard from "../../asset/image/integratedNft/card/polygon.png";
import klaytnCard from "../../asset/image/integratedNft/card/klaytn.png";
import solanaCard from "../../asset/image/integratedNft/card/solana.png";
import aptosCard from "../../asset/image/integratedNft/card/aptos.png";
import auroraCard from "../../asset/image/integratedNft/card/aurora.png";
import ethereumCardPreview from "../../asset/image/integratedNft/preview/card/ethereum.png";
import polygonCardPreview from "../../asset/image/integratedNft/preview/card/polygon.png";
import klaytnCardPreview from "../../asset/image/integratedNft/preview/card/klaytn.png";
import solanaCardPreview from "../../asset/image/integratedNft/preview/card/solana.png";
import aptosCardPreview from "../../asset/image/integratedNft/preview/card/aptos.png";
import auroraCardPreview from "../../asset/image/integratedNft/preview/card/aurora.png";

import ethereumCardBlank from "../../asset/image/integratedNft/card-blank/ethereum.png";
import polygonCardBlank from "../../asset/image/integratedNft/card-blank/polygon.png";
import klaytnCardBlank from "../../asset/image/integratedNft/card-blank/klaytn.png";
import solanaCardBlank from "../../asset/image/integratedNft/card-blank/solana.png";
import aptosCardBlank from "../../asset/image/integratedNft/card-blank/aptos.png";
import auroraCardBlank from "../../asset/image/integratedNft/card-blank/aurora.png";
import ethereumCardBlankPreview from "../../asset/image/integratedNft/preview/card-blank/ethereum.png";
import polygonCardBlankPreview from "../../asset/image/integratedNft/preview/card-blank/polygon.png";
import klaytnCardBlankPreview from "../../asset/image/integratedNft/preview/card-blank/klaytn.png";
import solanaCardBlankPreview from "../../asset/image/integratedNft/preview/card-blank/solana.png";
import aptosCardBlankPreview from "../../asset/image/integratedNft/preview/card-blank/aptos.png";
import auroraCardBlankPreview from "../../asset/image/integratedNft/preview/card-blank/aurora.png";

const chainList = [
    { name: "Ethereum", logo: EthereumLogo, icon: <EthereumIcon/>, explorerUrl: 'https://goerli.etherscan.io/tx', color: 'linear-gradient(227.26deg, #0D041A 25.99%, #2F1060 231.45%)', card: { image: ethereumCard, preview: ethereumCardPreview }, cardBlank: { image: ethereumCardBlank, preview: ethereumCardBlankPreview } },
    { name: "Klaytn", logo: KlaytnLogo, icon: <KlaytnIcon/>, explorerUrl: 'https://baobab.scope.klaytn.com/tx', color: 'linear-gradient(227.26deg, #C62E34 25.99%, #863466 231.45%)', card: { image: klaytnCard, preview: klaytnCardPreview }, cardBlank: { image: klaytnCardBlank, preview: klaytnCardBlankPreview } },
    { name: "Polygon", logo: PolygonLogo, icon: <PolygonIcon/>, explorerUrl: 'https://polygonscan.com/tx', color: 'linear-gradient(227.26deg, #7D61EE 25.99%, #3A2FC1 231.45%)', card: { image: polygonCard, preview: polygonCardPreview }, cardBlank: { image: polygonCardBlank, preview: polygonCardBlankPreview } },
    { name: "Solana", logo: SolanaLogo, icon: <SolanaIcon/>, explorerUrl: 'https://solscan.io/tx', color: 'linear-gradient(227.26deg, #6185EE 25.99%, #584FC7 231.45%)', card: { image: solanaCard, preview: solanaCardPreview }, cardBlank: { image: solanaCardBlank, preview: solanaCardBlankPreview } },
    { name: "Aptos", logo: AptosLogo, icon: <AptosIcon/>, explorerUrl: 'https://explorer.aptoslabs.com/tx', color: '#000000', card: { image: aptosCard, preview: aptosCardPreview }, cardBlank: { image: aptosCardBlank, preview: aptosCardBlankPreview } },
    { name: "Aurora", logo: AuroraLogo, icon: <AuroraIcon/>, explorerUrl: 'https://explorer.aurora.dev/tx', color: 'linear-gradient(214.98deg, #9CE4DF 20.58%, #0B3B7B 111.42%)', card: { image: auroraCard, preview: auroraCardPreview }, cardBlank: { image: auroraCardBlank, preview: auroraCardBlankPreview } }
]
export default chainList;