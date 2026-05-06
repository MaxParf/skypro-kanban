import styled from "styled-components";

const topicStyles = {
  "Web Design": { backgroundColor: "#FFE4C2", color: "#FF6D00" },
  "Research": { backgroundColor: "#B8E6CF", color: "#06B16E" },
  "Copywriting": { backgroundColor: "#E9D4FF", color: "#9A48F0" },
};

export const PopBrowse = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 7;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const PopBrowseContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
`;

export const PopBrowseBlock = styled.div`
  background-color: #FFFFFF;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: 0.7px solid #D4DBE5;
`;

export const PopBrowseContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const PopBrowseTtl = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 700;
`;

export const TopicText = styled.div`
  padding: 8px 20px;
  border-radius: 18px;
  font-size: 14px;
  font-weight: 600;
  background-color: ${({ $topic }) => topicStyles[$topic]?.backgroundColor || "#94a6be"};
  color: ${({ $topic }) => topicStyles[$topic]?.color || "#ffffff"};
`;

export const PopBrowseStatus = styled.div`
  margin-bottom: 11px;
`;

export const StatusTtl = styled.p`
  margin-bottom: 14px;
  font-size: 14px;
  font-weight: 600;
  color: #000;
`;

export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
`;

export const StatusTheme = styled.label`
  padding: 11px 14px;
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background: ${({ $active }) => ($active ? "#94a6be" : "#ffffff")};
  color: ${({ $active }) => ($active ? "#ffffff" : "#94a6be")};
  cursor: pointer;
  p { font-size: 14px; }
`;

export const PopBrowseWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
`;

export const PopBrowseForm = styled.form`
  width: 100%;
  max-width: 370px;
`;

export const FormBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormBrowseArea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 14px;
  background: #f1f4f9;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  margin-top: 14px;
  &[readonly] { color: #94A6BE; }
`;

export const PopBrowseCalendar = styled.div`
  width: 182px;
`;

export const CalendarPeriod = styled.div`
  margin-top: 8px;

  p {
    color: #94A6BE;
    font-size: 10px;
    line-height: 13px;
  }

  span {
    color: #000;
    font-weight: 600;
  }
`;

export const PopBrowseBtnBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

export const BtnGroup = styled.div`
  display: flex;
  gap: 8px;
`;

const BaseBtn = styled.button`
  height: 30px;
  border-radius: 4px;
  padding: 0 14px;
  font-size: 14px;
  cursor: pointer;

  &:disabled {
    cursor: default;
    opacity: 0.6;
  }
`;

export const ActionError = styled.p`
  color: #ff0000;
  font-size: 12px;
  margin-top: 12px;
`;

export const BtnEdit = styled(BaseBtn)`
  background: #565EEF;
  color: #fff;
  border: none;
`;

export const BtnDelete = styled(BaseBtn)`
  background: #fff;
  color: #565EEF;
  border: 1px solid #565EEF;
`;

export const BtnClose = styled(BtnEdit)`
  margin-left: auto;
`;
