import { useCreateIntegratedNft } from "../../hook/useCreateIntegratedNft";
import ContentsBox from "../../components/contentsBox/ContentsBox";
import AvailableNft from "../../components/integratedNft/AvailableNft";
import IncludedNft from "../../components/integratedNft/IncludedNft";
import MiniHeader from "../../components/miniHeader/MiniHeader";
import Select from "../../components/select/Select";
import chainList from "../../utils/data/chainList";
import Button from "../../components/button/Button";

type adminMenuProp = {
    integratedNftInfo: any;
    updateIntegratedNft: Function;
}

function AdminMenu ({ integratedNftInfo, updateIntegratedNft }:adminMenuProp) {
    const { availableNftList, checkedNftList, addCheckedNft, removeCheckedNft } = useCreateIntegratedNft({ chain: integratedNftInfo?.chainType })

    return (
        <>
            <MiniHeader 
            title="Setting"
            />
            {
                integratedNftInfo &&
                <div className="flex-column-20">
                    <ContentsBox
                        title="1. 체인 선택하기"
                        disabled={true}
                        initialOpened={true}
                    >
                        <Select
                            value={integratedNftInfo.chainType}
                            setValue={()=>{}}
                            optionValueKey={"name"}
                            optionIconKey={"logo"}
                            optionList={chainList}
                            disabled={true}
                        />
                    </ContentsBox>
                    <ContentsBox
                        title="2. 통합할 NFT 선택하고 발행하기"
                        disabled={true}
                        initialOpened={true}
                    >
                        <div className="included-nft-container flex-column-10">
                            {
                                integratedNftInfo.nftArray.map((nft:any, idx:number) => (
                                    <IncludedNft nftInfo={nft} disabled={true} key={idx}/>
                                ))
                            }
                        </div>
                    </ContentsBox>
                    <ContentsBox
                        title="3. 업데이트 하기"
                        disabled={false}
                        initialOpened={!!(availableNftList?.length)}
                    >
                        <>
                        <h5 className="nft-description">
                            선택한 NFT에 대한 소유권 및 혜택 사용권이<br/>
                            통합 NFT에 포함됩니다.
                        </h5>
                        <div className="available-nft-container flex-row-18"
                            style={{flexWrap: "wrap" }}
                        >
                            {
                                availableNftList.map((nft:any, idx:number) => (
                                    <AvailableNft 
                                        nftInfo={nft}
                                        checked={checkedNftList.includes(nft.id)}
                                        checkAction={()=>addCheckedNft(nft.id)}
                                        uncheckAction={()=>removeCheckedNft(nft.id)}
                                    />
                                ))
                            } 
                        </div>
                        <Button 
                            theme="purple"
                            disabled={!checkedNftList.length}
                            onClick={()=>{updateIntegratedNft(checkedNftList)}}
                            text="업데이트 하기"
                        />
                        </>
                    </ContentsBox>

                    <ContentsBox
                        title="4. 소각하기 (준비중)"
                        disabled={true}
                        initialOpened={false}
                    />
                </div>
            }
        </>
    )
}
export default AdminMenu;