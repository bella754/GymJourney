import { Component } from "uix/components/Component.ts";

type Props = {};

@template<Props>((props) => (
  <div>
    <div class="container">
      <label>123</label>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 24 24"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
            stroke="#0F172A"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
            stroke="#0F172A"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </div>
))
@style(css`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  label {
    font-size: 14px;
  }

  button {
    border: none;
    background-color: transparent;
    width: 31px;
    height: 31px;
    padding: 0;
  }
`)
export class Streak extends Component<Props> {}
