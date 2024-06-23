import { AppBar } from "../../components/appbar/AppBar.tsx";
import { LvlProgressbar } from "common/routes/index/components/LvlProgressbar.tsx";
import { Achievements } from "common/routes/index/components/Achievements.tsx";

export const page = () => {
  return (
    <div>
      <AppBar />
      <div style="margin: 10px auto; display: flex; justify-content: center; align-items: center; max-width: 600px; width: 100%; height: 100%;">
        <div style="display: flex; flex-direction: column; align-items: center;">
          <h2>My Stats</h2>
          <div style="display: flex; flex-direction: column; gap: 10px;">
            <div style="display: flex; flex-direction: row; gap: 10px">
              <LvlProgressbar />
              <LvlProgressbar />
            </div>
            <div style="display: flex; flex-direction: row; gap: 10px">
              <LvlProgressbar />
              <LvlProgressbar />
            </div>
          </div>
          <h2>Achievements</h2>
          <Achievements />
        </div>
      </div>
    </div>
  );
};

export default page;
