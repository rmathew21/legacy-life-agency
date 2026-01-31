"use client";

import * as React from "react";
import { GripVerticalIcon } from "lucide-react";
import { Group, Panel, Separator } from "react-resizable-panels";

import { cn } from "./utils";

type Direction = "horizontal" | "vertical";

type ResizablePanelGroupProps = Omit<
React.ComponentProps<typeof Group>,
"orientation"
> & {
    direction?: Direction;
};

function ResizablePanelGroup({
  className,
  direction = "horizontal",
  ...props
}: ResizablePanelGroupProps) {
    return (
        <Group 
            data-slot="resizable-panel-group"
            orientation={direction} 
            className={cn(
                "flex h-full w-full",
                direction === "vertical" && "flex-col",
                className,
            )}
            {...props}
        />
    );
}

// React.ComponentProps<typeof Group> & { direction?: Direction }) {
//   return (
//     <Group
//       data-slot="resizable-panel-group"
//       direction={direction}
//       className={cn(
//         "flex h-full w-full",
//         direction === "vertical" && "flex-col",
//         className,
//       )}
//       {...props}
//     />
//   );
// }

function ResizablePanel(props: React.ComponentProps<typeof Panel>) {
  return <Panel data-slot="resizable-panel" {...props} />;
}

function ResizableHandle({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof Separator> & {
  withHandle?: boolean;
}) {
  return (
    <Separator
      data-slot="resizable-handle"
      className={cn(
        // base (horizontal)
        "bg-border focus-visible:ring-ring relative flex w-px items-center justify-center focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden",
        // make it feel easier to grab
        "after:absolute after:inset-y-0 after:left-1/2 after:w-2 after:-translate-x-1/2",
        // vertical variant (Separator gets data attrs in some builds; this also works as plain CSS)
        "data-[group-direction=vertical]:h-px data-[group-direction=vertical]:w-full data-[group-direction=vertical]:after:inset-x-0 data-[group-direction=vertical]:after:inset-y-auto data-[group-direction=vertical]:after:top-1/2 data-[group-direction=vertical]:after:h-2 data-[group-direction=vertical]:after:w-full data-[group-direction=vertical]:after:-translate-y-1/2 data-[group-direction=vertical]:after:translate-x-0",
        className,
      )}
      {...props}
    >
      {withHandle && (
        <div className="bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border">
          <GripVerticalIcon className="size-2.5" />
        </div>
      )}
    </Separator>
  );
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };