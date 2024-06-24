import { useCallback, useReducer } from "react";

type ViewType = "grid" | "list";

type ViewTypeReduceAction =
  | {
      type: "viewAsGrid";
    }
  | {
      type: "viewAsList";
    };

type ViewTypeReduceState = {
  viewType: ViewType;
  isGrid: boolean;
  isList: boolean;
};

function viewTypeReducer(
  _: ViewTypeReduceState,
  action: ViewTypeReduceAction
): ViewTypeReduceState {
  switch (action.type) {
    case "viewAsGrid":
      return {
        viewType: "grid",
        isGrid: true,
        isList: false,
      };
    case "viewAsList":
      return {
        viewType: "list",
        isGrid: false,
        isList: true,
      };
    default:
      throw new Error("Invalid action");
  }
}

export function useViewTypeReduce(initialViewType: ViewType = "grid") {
  const [state, dispatch] = useReducer(viewTypeReducer, {
    viewType: initialViewType,
    isGrid: initialViewType === "grid",
    isList: initialViewType === "list",
  });

  const viewAsGrid = useCallback(() => {
    dispatch({ type: "viewAsGrid" });
  }, []);

  const viewAsList = useCallback(() => {
    dispatch({ type: "viewAsList" });
  }, []);

  return {
    viewType: state.viewType,
    isGrid: state.isGrid,
    isList: state.isList,
    viewAsGrid,
    viewAsList,
  };
}
