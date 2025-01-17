import Icon from "../../Icons/Icon.tsx";
import * as S from "./VisibilityScore.styles.ts";

interface VisibilityScoreProps {
  selectedTags: number;
  limit: number;
}

const VisibilityScore = ({ selectedTags, limit }: VisibilityScoreProps) => {
  const difference = limit >= selectedTags && limit - selectedTags;

  const ratingColor = () => {
    if (selectedTags < 3) {
      return "error";
    }

    if (selectedTags < 4) {
      return "warning";
    }
    if (selectedTags < limit) {
      return "success";
    }

    return "default";
  };

  const ratingMessage = () => {
    if (selectedTags < 3) {
      return "Słabo";
    }
    if (selectedTags < 4) {
      return "Lepiej";
    }
    if (selectedTags < limit) {
      return "Dobrze";
    }
  };

  return (
    <S.Wrapper data-testid="visibility-score">
      <S.Rating>
        <S.ScoreMessage $color={ratingColor()}>
          {ratingMessage()}
        </S.ScoreMessage>
        {[...Array(limit)].map((_, index) => (
          <S.ScorePill
            data-testid="score-pill"
            key={index}
            $color={index < selectedTags ? ratingColor() : "default"}
          />
        ))}
      </S.Rating>

      <S.Hint>
        <S.InfoIcon>
          <Icon.CloseIcon size={16} />
        </S.InfoIcon>
        Zbyt mało tagów. Dodaj jeszcze {difference} aby poprawić widoczność
        artykułu
      </S.Hint>
    </S.Wrapper>
  );
};

export default VisibilityScore;
