// snapshots.test.tsx

/// <reference types="vite/client"/>
import { Meta, StoryFn } from "@storybook/react"
import { composeStories } from "@storybook/testing-react"
import { render } from "@testing-library/react"
import React from "react"
import { describe, expect, test } from "vitest"

type StoryFile = {
  default: Meta
  [name: string]: StoryFn | Meta
}

describe("Storybook Snapshots", async () => {
  const modules = await Promise.all(
    Object.values(import.meta.glob<StoryFile>("../**/*.stories.tsx")).map(
      (fn) => fn()
    )
  )

  describe.each(
    modules.map((module) => ({ name: module.default.title, module }))
  )("$name", ({ module }) => {
    test.each(
      Object.values(composeStories(module)).map((Story) => [
        Story.storyName!,
        Story,
      ])
    )("%s", (_, Story) => {
      const { container } = render(<Story />)
      expect(container).toBeTruthy()
      expect(container).toMatchSnapshot()
    })
  })
})